import React from 'react';
import owner from './images/sk.png';
import './Info.css';
function Info() {
  return (
    <div className='about'>
      <h1>About us</h1>
      <h2 className='found'>Sandeep Patel</h2>
      <h4 className='found'>Founder and Director</h4>
      <a className='container-1'>
      <p className='para'>Lorem ipsum odor amet, consectetuer adipiscing elit. Quis hac ornare cras magnis ad interdum eleifend dolor. Habitasse volutpat hendrerit pulvinar est justo curae. Vulputate lacinia eu, torquent risus lectus morbi purus felis magnis. Augue sociosqu mollis malesuada viverra vulputate arcu parturient metus tempor. Dignissim egestas dolor fermentum morbi rhoncus montes hendrerit scelerisque. Et natoque blandit metus viverra placerat ultrices nisl. Quam nisi viverra convallis venenatis enim mauris dictum magna. Quis dis commodo parturient duis fames ante habitant id maecenas. Hendrerit placerat sem nam felis curabitur suspendisse eros.
<br></br>   
<br></br>  
          Massa dolor tortor purus eleifend tortor condimentum nec luctus. Maecenas in dapibus a duis turpis litora elementum. Litora sit ultrices magnis adipiscing aptent viverra. Odio congue integer tortor urna proin? Quis nostra phasellus gravida elementum sollicitudin. Taciti dignissim ridiculus taciti ridiculus erat lorem mi risus. Duis dictum ex lectus; morbi elit ligula penatibus duis neque. Maximus nec proin parturient amet ac ornare, eget pellentesque.</p>
      <img id='owner' src={owner} alt='the Owner' />
      </a>
      <br></br>
    <div className='container-2'>
    <h2>Our Mission</h2>
    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Donec conubia in molestie nostra sociosqu platea praesent gravida vitae. Suspendisse dis donec tempus class maecenas etiam. Purus augue phasellus luctus lectus cras sit. Eros augue consequat semper sem tellus diam dapibus duis. Ligula per finibus quam neque molestie quisque tellus. Nisi varius sodales elementum vestibulum parturient. Mauris cubilia donec dignissim, curabitur parturient est. Quisque himenaeos sociosqu etiam nulla diam ornare tincidunt id mus.</p>
    </div>
    </div>
  )
}

export default Info;
