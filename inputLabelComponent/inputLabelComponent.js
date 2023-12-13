class InputLabelComponent extends HTMLElement{
    constructor(){
        super();

        this.shadowDOM = this.attachShadow({mode: 'open'});

        const labelAttrValue = this.getAttribute('label');

        let input = this.buildInput(labelAttrValue);

        this.shadowDOM.appendChild(input);

        let label = this.buildLabel(labelAttrValue);

        this.shadowDOM.appendChild(label);

        let css = this.buildlLink();

        this.shadowDOM.appendChild(css);
    }

    buildlLink(){
        let link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.href = './inputLabelComponent/inputLabelComponent.css';
        
        return link;
    }

    buildInput(id){
        let input = document.createElement('input');

        input.setAttribute('id', id);

        return input;
    }

    buildLabel(id){
        let label = document.createElement('label');

        label.setAttribute('for', id);
        label.innerHTML = id;

        return label;
    }

}

customElements.define('input-label', InputLabelComponent);