# Backend

## inciadores y dependencias

- npm init -y
- npm i ts-node-dev -D
- npm i mongoose
- npm i express
- npm i @types/express -D
- npm i cors
- npm i @types/cors -D
- npx tsc --init

## configuraciones

- package.json
- tsconfig.json
- .env
- .gitignore

## conexión con MongoDB

## conexion al puerto

- 1: creamos la aplicacion :
  const app = express()

- 2: defino el puerto en el que levanto la app
  app.listen(PORT, () => {console.log(`Servidor en escucha en el puerto http://localhost:${PORT}`) })

-3: dar los permisos
app.use(cors())

- 4: conectamos con la base de datos
  app.listen(PORT, () => {
  console.log(`Servidor en escucha en el puerto http://localhost:${PORT}`);
  connectDB();
  })

## Métodos HTTP

### GET

app.use(cors())
app.get("path", (req, resp)=>{})

### POST

app.use(express.json())
app.post("end point", ()=>{desestructurar el body})

### PATCH

app.patch("end point/:id", ()=>{const id = req.params.id y des el body})

### DELETE

app.delete("end poin/:id", ()=>{const id = req.params.id})
