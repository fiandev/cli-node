### cli node
comamnd line base javascript (nodejs)

### clone this project

```shell
git clone https://github.com/fiandev/cli-node
cd cli-node
```

### edit package.json

```json
"bin": {
    "gw": "bin/index.js",
    "<YOUR PREFIX COMMAND>": "bin/index.js"
  }
```

### save changes (required)

```shell
npm link
```

### show menu command

```shell
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