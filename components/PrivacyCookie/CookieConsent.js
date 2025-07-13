import React, { useState, useEffect } from 'react';

// Utility: Get stored consent from localStorage
function getConsentFromStorage() {
  if (typeof window === 'undefined') return null;
  try {
    const storedConsent = localStorage.getItem('cookieConsent');
    if (!storedConsent) return null;
    return JSON.parse(storedConsent);
  } catch {
    return null;
  }
}

// Utility: Save consent to localStorage
function setConsentInStorage(consent) {
  if (typeof window === 'undefined') return;
  localStorage.setItem('cookieConsent', JSON.stringify(consent));
}

function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  // Consent state with multiple categories
  // essential = always true (cannot be disabled)
  const [consent, setConsent] = useState({
    essential: true,
    performance: true,
    analytics: true,
    advertising: true,
  });

  // Check localStorage on mount
  useEffect(() => {
    const savedConsent = getConsentFromStorage();
    if (savedConsent) {
      // If we have saved preferences, don't show banner
      setConsent(savedConsent);
      setShowBanner(false);
    } else {
      // Show banner after 10 seconds
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  // Accept All: enable everything
  function handleAcceptAll() {
    const newConsent = {
      essential: true,
      performance: true,
      analytics: true,
      advertising: true,
    };
    setConsent(newConsent);
    setConsentInStorage(newConsent);
    setShowBanner(false);
    setShowPreferences(false);
  }

  // Save user preferences
  function handleSavePreferences() {
    // Ensure essential remains true
    const newConsent = { ...consent, essential: true };
    setConsent(newConsent);
    setConsentInStorage(newConsent);
    setShowBanner(false);
    setShowPreferences(false);
  }

  // Individual toggles for each category
  function togglePerformance() {
    setConsent((prev) => ({ ...prev, performance: !prev.performance }));
  }

  function toggleAnalytics() {
    setConsent((prev) => ({ ...prev, analytics: !prev.analytics }));
  }

  function toggleAdvertising() {
    setConsent((prev) => ({ ...prev, advertising: !prev.advertising }));
  }

  // If banner and preferences are both not shown, render nothing
  if (!showBanner && !showPreferences) {
    return null;
  }

  return (
    <>
      {/* The Cookie Banner */}
      {showBanner && (
        <div style={styles.bannerContainer}>
          <div style={styles.bannerContent}>
            <h3 style={styles.bannerTitle}>Cookies & Privacy</h3>
            <p style={styles.bannerText}>
              We use cookies to give you the best experience. Essential cookies are always active. You can accept all or manage your preferences. 
              <br/>Check <a
              href="https://oneclickhuman.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              style={{color: 'rgb(34, 34, 34)', textDecoration: 'underline'}}
            >Privacy policy</a> in detail.
            </p>

            <div style={styles.bannerButtons} className='button-group'>
              <button type="button" onClick={handleAcceptAll} className='btn-default btn-small'>
                Accept All
              </button>
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className='btn-default btn-small'
              >
                Preferences
              </button>
              {/* <a
              href="https://oneclickhuman.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className='btn-default btn-small'
            >
              More details
            </a> */}
            </div>
          </div>
        </div>
      )}

      {/* The Preferences Popup */}
      {showPreferences && (
        <div style={styles.modalOverlay} onClick={() => setShowPreferences(false)}>
          {/* Stop clicks inside modal from closing it */}
          <div onClick={(e) => e.stopPropagation()} style={styles.modalContainer}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Preferences</h2>
              <p style={{fontSize: '14px', color: 'rgb(102, 102, 102)'}}>We use different types of cookies to optimize your experience on our website. Click on the categories below to learn more about their purposes. You may choose which types of cookies to allow and can change your preferences at any time. Remember that disabling cookies may affect your experience on the website.</p>
              <button
                style={styles.closeBtn}
                onClick={() => setShowPreferences(false)}
                aria-label="Close preferences"
              >
                &times;
              </button>
            </div>

            {/* Essential Cookies - Always Enabled */}
            <div style={styles.categoryContainer}>
              <h3 style={styles.categoryTitle}>Essential Cookies</h3>
              <p style={styles.categoryDescription}>
                Always active. These are required for basic site functionality.
              </p>
            </div>

            {/* Performance & Functionality */}
            <div style={styles.categoryContainer}>
              <label style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={consent.performance}
                  onChange={togglePerformance}
                  style={styles.checkboxInput}
                />
                <span style={styles.checkboxText}>
                  Performance &amp; Functionality
                </span>
              </label>
              <p style={styles.categoryDescription}>
              These cookies are used to enhance the performance and functionality of our websites but are nonessential to their use. However, without these cookies, certain functionality (like videos) may become unavailable.
              </p>
            </div>

            {/* Analytics & Customization */}
            <div style={styles.categoryContainer}>
              <label style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={consent.analytics}
                  onChange={toggleAnalytics}
                  style={styles.checkboxInput}
                />
                <span style={styles.checkboxText}>
                  Analytics &amp; Customization
                </span>
              </label>
              <p style={styles.categoryDescription}>
              These cookies collect information that can help us understand how our websites are being used. This information can also be used to measure effectiveness in our marketing campaigns or to curate a personalized site experience for you.
              </p>
            </div>

            {/* Advertising */}
            <div style={styles.categoryContainer}>
              <label style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={consent.advertising}
                  onChange={toggleAdvertising}
                  style={styles.checkboxInput}
                />
                <span style={styles.checkboxText}>Advertising</span>
              </label>
              <p style={styles.categoryDescription}>
              These cookies are used to make advertising messages more relevant to you. They prevent the same ad from continuously reappearing, ensure that ads are properly displayed for advertisers, and in some cases select advertisements that are based on your interests.
              </p>
            </div>

            <div style={styles.modalFooter}>
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                style={styles.cancelBtn}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSavePreferences}
                style={styles.saveBtn}
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CookieConsent;

/* Inline "styles" object for a professional look and feel */
const styles = {
  bannerContainer: {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    zIndex: 9999,
    animation: 'fadeIn 0.4s ease',
  },
  bannerContent: {
    backgroundColor: '#fff',
    borderRadius: '6px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    padding: '26px 27px',
    maxWidth: '520px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    width: '100%'
  },
  bannerTitle: {
    margin: '0 0 8px',
    fontSize: '16px',
    fontWeight: '600',
    color: '#222'
  },
  bannerText: {
    margin: '0',
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#222'
  },
  bannerButtons: {
    marginTop: '20px',
  },
  acceptBtn: {
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 12px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  preferenceBtn: {
    backgroundColor: '#fff',
    color: '#0070f3',
    border: '1px solid #0070f3',
    borderRadius: '4px',
    padding: '8px 12px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  privacyLink: {
    display: 'inline-block',
    marginTop: '8px',
    fontSize: '13px',
    textDecoration: 'underline',
    color: '#0070f3',
  },
  // Modal / Preferences
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 10000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: 'fadeIn 0.4s ease',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: '6px',
    boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
    padding: '24px',
    width: '600px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    position: 'relative',
    animation: 'slideIn 0.3s ease',
  },
  modalHeader: {
    justifyContent: 'space-between',
    marginBottom: '16px',
  },
  modalTitle: {
    margin: 0,
    fontSize: '18px',
    fontWeight: '600',
    color: '#000',
    marginBottom: '10px',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    fontSize: '24px',
    lineHeight: 1,
    cursor: 'pointer',
    position: 'absolute',
    top: '10px',
    right: '10px'
  },
  categoryContainer: {
    marginBottom: '16px',
  },
  categoryTitle: {
    margin: 0,
    fontSize: '15px',
    fontWeight: '600',
  },
  categoryDescription: {
    margin: '4px 0 0',
    fontSize: '12px',
    lineHeight: 1.4,
    color: '#666',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
  },
  checkboxInput: {
    marginRight: '8px',
    cursor: 'pointer',
    opacity: '1',
    width: 'unset',
    position: 'static'
  },
  checkboxText: {},
  modalFooter: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '8px',
  },
  cancelBtn: {
    backgroundColor: '#fff',
    color: '#333',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '8px 12px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  saveBtn: {
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 12px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};
