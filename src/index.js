import _ from 'lodash';
import style from '../src/style.scss';
import Table from './Table';

const data = [
    {
        id: 1,
        name: 'Шарики',
        count: 100,
        price: 1
    },
    {
        id: 2,
        name: 'Шарики2',
        count: 100,
        price: 1
    },
    {
        id: 3,
        name: 'Шарики3',
        count: 15,
        price: 16
    },
    {
        id: 4,
        name: 'Шарики4',
        count: 10,
        price: 14
    },
    {
        id: 5,
        name: 'Шарики5',
        count: 100,
        price: 15
    },
    {
        id: 6,
        name: 'Шарики6',
        count: 100,
        price: 10
    },
];


let table = new Table(data);
table.show();
//table.sort();