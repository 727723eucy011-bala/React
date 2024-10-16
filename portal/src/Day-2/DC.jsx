import React from 'react';

const styles = {
  img: {
    width: '70%',
    padding:'50px'
  },
  box:
  {
    borderRadius:'50px',justifyContent:'center',
    backgroundColor:'#f0f0f0',
  },
  box1:
  {
    borderRadius:'50px',justifyContent:'center',padding:'5px',
    backgroundColor:'#f0f0f0',
  },
  text:
  { textAlign: 'center' }
};

function Display() {
  return (
    <div>
      <h1 style={styles.text}>Car and Location Info</h1>
      <div style={styles.box}>
      <br />
      <h3 style={styles.text}>Tesla Model S</h3>
      
      <img
        style={styles.img}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.0uAdO4dALtKDKP-QtENcUgHaEK%26pid%3DApi&f=1&ipt=31f93a1608863bbecb822ef1ca37202fb4ba8840de996ed512b36127898c7a92&ipo=images"
        alt="A Tesla car driving on a road"
      />
      </div>
      <br />
      <div style={styles.box1}>
        <h1 style={styles.text}>Tesla</h1>
        <h3 style={styles.text}>Palo Alto</h3>
      </div>
    </div>
  );
}

export default Display;