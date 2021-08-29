
import './App.css';

function App() {
  return (
    <div className="App">
      <form name="contact-form" method="POST" data-netlify="true" onSubmit="submit">
        <input type='hidden' name="form-name" value="contact-form"/>
    <input type="text" name="name" placeholder="name" /> 
  
    <input type="email" name="email" placeholder="email" />
  
    <textarea name="message"></textarea>

    <button type="submit">Send</button>
</form>

    </div>
  );
}

export default App;
