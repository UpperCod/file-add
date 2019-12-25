import { customElement, useProp } from "atomico";
import html from "atomico/html";

const Greeting = () => {
  let [name, setName] = useProp("name");

  return html`
    <host shadowDom>
      <style>
        button {
          font-size: 200%;
        }
      </style>
      <button>Hello ${name}!</button><br />
    </host>
  `;
};

Greeting.props = {
  name: {
    // the supported types are String, Number, Boolean, Object, Array, Function and Promise
    type: String,
    // reflects the change as an attribute of the web-component
    reflect: true,
    // initial value of the property, this is also reflected as an attribute
    value: "World"
  }
};

const GreetingElement = customElement(Greeting);
export default GreetingElement;

customElements.define("custom-element", GreetingElement);
