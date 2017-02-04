class Table {
    constructor(data) {
        this.data = data;
        this.table = document.querySelector('.list');
        this.summ = document.querySelector('.summ');
        this.flag = true;
        this.sort_t = document.querySelector('.sort');
        this.sort_t.addEventListener('click', () => this.sort(), false);
    }

    show() {
        this.table.innerHTML = "";
        this.summ.innerHTML = "";
        this.data.forEach((item, arr) => {
            let tr = document.createElement('tr');
            item.summ = item.count * item.price;
            this.summ.innerText = +document.querySelector('.summ').innerText + item.summ;
            for (let index in item) {
                let td = document.createElement('td');
                td.innerText = item[index];
                tr.appendChild(td);
            }
            this.table.appendChild(tr);
        });
    }

    sort() {
        let compareNumeric = (a, b) => a.summ - b.summ;
        let span = document.createElement('span');
        this.sort_t.childNodes.length > 1 ? this.sort_t.removeChild(this.sort_t.childNodes[1]) : "";
        if (this.flag) {
            this.data.sort(compareNumeric);
            this.show();
            this.flag = false;
            let strelka = document.createTextNode(String.fromCharCode(8659));
            span.appendChild(strelka);
            this.sort_t.appendChild(span);
        } else {
            this.data.sort(compareNumeric);
            this.data.reverse();
            this.show();
            this.flag = true;
            let strelka = document.createTextNode(String.fromCharCode(8657));
            span.appendChild(strelka);
            this.sort_t.appendChild(span);
        }
    }
}

export default Table;