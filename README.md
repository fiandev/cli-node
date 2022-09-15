### cli node

> Command line based javascript (nodejs)

### clone this project

```shell
git clone https://github.com/fiandev/cli-node
cd cli-node
```

### install dependencies

```shell
npm install

# or you can installing as global dependencies
npm install -g
```

### edit package.json

```json
"bin": {
    "gw": "bin/index.js",
    "<YOUR PREFIX COMMAND>": "bin/index.js"
  }
```

### start command line

```shell
npm link
```

### show menu command

```shell
# showing menu
gw menu

# or just write <PREFIX>
gw
```

### example execute command

```shell
# show list files in directory active
gw exe ls

# or multiple command
gw exe "git clone https://github.com/fiandev/cli-node"
```

> Build with ❤️ By Fiandev