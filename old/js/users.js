const express = require("express")
const server = express();
const router = express.Router();
const fs = require('fs');

server.use(express.json({extended: true}));

const readFile = () => {
    const content = fs.readFileSync('./assets/users/data/users.json', 'utf-8');
    return (JSON.parse(content));
}
const writeFile = (content) => {
    const updateFile = JSON.stringify(content);
    fs.writeFileSync('./assets/users/data/users.json', updateFile, 'utf-8');

}

// READ
router.get('/', (req, res) => {
    const content = readFile();
    res.send(content);
})

// CREATE
router.post('/', (req, res) => {
    const {name, CPF, birthday, celphone, email, password} = req.body
    const currentContent = readFile();
    const id = Math.random().toString(32).substring(2, 9);
    currentContent.push({id, name, CPF, birthday, celphone, email, password});
    writeFile(currentContent);
    res.send({id, name, CPF, birthday, celphone, email, password});
})

//UPDATE
router.put('/:id', (req, res) => {
    const {id} = req.params;

    const {name, CPF, birthday, celphone, email, password} = req.body;

    const currentContent = readFile();
    const selectedItem = currentContent.findIndex((item) => item.id === id);

    const {id: cId, name: cName, CPF: cCPF, birthday: cBirthday, celphone: cCelphone, email: cEmail, password: cPassword} = currentContent[selectedItem];

    const newObject = {
        id: cId,
        name: name ? name: cName,
        CPF: CPF ? CPF: cCPF,
        birthday: birthday ? birthday: cBirthday,
        celphone: celphone ? celphone: cCelphone,
        email: email ? email: cEmail,
        password: password ? password: cPassword,
    }

    currentContent[selectedItem] = newObject;
    writeFile(currentContent);
    res.send(newObject);
})

//DELETE
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const currentContent = readFile();
    const selectedItem = currentContent.findIndex((item) => item.id === id);
    currentContent.splice(selectedItem, 1);
    writeFile(currentContent);
    res.send(true);
})

server.use(router);

server.listen(4000, () => {
    console.log('rodando servidor');
})