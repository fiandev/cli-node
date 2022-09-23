### cli node

> Command line based javascript (nodejs)

### clone this project

```shell
git clone https://github.com/fiandev/cli-node
cd cli-node
```

### install dependencies

```shell
npm install cli-node

# or you can installing as global
npm install cli-node -g
```

### edit package.json

```json
"bin": {
    "cline": "bin/index.js",
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
cline menu

# or just write <PREFIX>
cline
```

### example execute command

```shell
# show list files in directory active
cline exe ls

# or multiple command arguments
cline exe "git clone https://github.com/fiandev/cli-node"
```

> Build with ❤️ By Fiandev