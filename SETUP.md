# Setup Guide: asdf and Node.js

## Step 1: Install Xcode Command Line Tools
A dialog should have appeared. Click "Install" and wait for it to complete.

## Step 2: Install asdf

After Xcode tools are installed, run:

```bash
git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.14.0
```

## Step 3: Add asdf to your shell

Since you're using zsh, add these lines to your `~/.zshrc`:

```bash
echo -e '\n. "$HOME/.asdf/asdf.sh"' >> ~/.zshrc
echo -e '\n. "$HOME/.asdf/completions/asdf.bash"' >> ~/.zshrc
```

Then reload your shell:
```bash
source ~/.zshrc
```

## Step 4: Install Node.js plugin for asdf

```bash
asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git
```

## Step 5: Install Node.js

Install the latest LTS version:
```bash
asdf install nodejs lts
asdf global nodejs lts
```

Or install a specific version:
```bash
asdf install nodejs 20.11.0
asdf global nodejs 20.11.0
```

## Step 6: Verify installation

```bash
node --version
npm --version
```

## Step 7: Install project dependencies

Once Node.js is installed, run:
```bash
npm install
```

Then start the dev server:
```bash
npm run dev
```
