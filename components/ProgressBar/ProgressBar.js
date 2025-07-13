
  const ProgressBar = ({bgcolor,progress,max}) => {

    let childWidth = 100*(progress/max);
     
    const Parentdiv = {
        height: '6px',
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
      }
      
      const Childdiv = {
        height: '100%',
        width: `${childWidth}%`,
        backgroundColor: bgcolor,
        borderRadius:40,
        textAlign: 'right'
      }
      
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
      }
        
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}></div>
    </div>
    )
}
  
export default ProgressBar;