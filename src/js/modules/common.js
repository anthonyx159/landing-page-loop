//COMMON JS - Importa todas las librerias que necesites definidas en el package.json
import 'normalize.css'
import Drawer from '../components/drawer';

export default class Common {

    init() {
        (new Drawer).init();
    }
}