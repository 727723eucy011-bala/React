import React from 'react';

const Wel = () =>
{
  return (
    <div>
    <h1 style={{color:'green'}}>Inline Style in JSX Example.</h1>
    <div style={{backgroundColor:'darkblue', color:'darkblue', padding:'10px',border:'1px solid blue',borderRadius:'5px'}}>
      <p style={{color:'darkblue',fontSize:'16px'}}>This is a paragraph with inline styles applied.</p>
    </div>
    </div>
  )
}
export default Wel;

//class work - day2
/*You are tasked with creating a simple web application to demonstrate the use of inline styles in JSX.
Your application should render a web page with the following requirements:
There should be a heading element (<h1>) with the text "Inline Style in JSX Example."
The heading text should have a green color.
Inside a div element, there should be a paragraph (<p>) with the text "This is a paragraph with inline styles applied."
The paragraph should have the following inline styles applied:

Text color should be 'darkblue.'
Font size should be '16px.'
The div element itself should have the following inline styles applied:
Background color should be 'lightblue.'
Text color should be 'darkblue.'
Padding should be '10px.'
A border with the style '1px solid blue.'
A border radius of '5px.'
You need to create a React component named App that renders the above structure and styles using JSX and inline styles. */

