class InputLabelComponent extends HTMLElement{
    constructor(){
        super();

        const component = this.buildComponent();

        this.shadow = this.attachShadow({mode: 'open'});

        this.shadow.appendChild(component);
    }

    buildComponent(){
        let divContainer = document.createElement('div');

        const label = this.buildLabel();

        const input = this.buildInput();

        divContainer.appendChild(label);

        divContainer.appendChild(input);

        return divContainer;

    }

    buildInput(){
        let inputElement = document.createElement('input');

        inputElement.id = this.name;

        inputElement.name = this.name;

        return inputElement;
    }

    buildLabel(){
        let labelElement = document.createElement('label');

        labelElement.id = `${this.name}Label`;

        labelElement.name = `${this.name}Label`;

        labelElement.setAttribute('for', this.name);

        labelElement.innerHTML = `${this.name}:`;

        return labelElement;
    }

    get name(){
        return this.getAttribute('name');
    }
}

customElements.define('input-label', InputLabelComponent);