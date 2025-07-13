export const Language = ({language, show_language, showLanguage, changeLanguage}) => {
   return(
  <span id="language">
    <button onClick={showLanguage}>{language}</button>
    { show_language === true ? 
    <span id="language-dropdown">
      <span onClick={() => changeLanguage('Bulgarian')}>Bulgarian</span>
      <span onClick={() => changeLanguage('English')}>English</span> 
      <span onClick={() => changeLanguage('French')}>French</span>
      <span onClick={() => changeLanguage('German')}>German</span>
      <span onClick={() => changeLanguage('Hindi')}>Hindi</span>
      <span onClick={() => changeLanguage('Indonesian')}>Indonesian</span>
      <span onClick={() => changeLanguage('Japanese')}>Japanese</span>
      <span onClick={() => changeLanguage('Portuguese')}>Portuguese</span>
      <span onClick={() => changeLanguage('Polish')}>Polish</span>
      <span onClick={() => changeLanguage('Romanian')}>Romanian</span>
      <span onClick={() => changeLanguage('Russian')}>Russian</span>
      <span onClick={() => changeLanguage('Spanish')}>Spanish</span>  
    </span>
    : ''}
  </span>
   )
}