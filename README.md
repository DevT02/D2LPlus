

<img src="https://github.com/DevT02/D2LPlus/assets/40608267/618318ae-a4a2-473b-8237-52eb5725ef85" width="125" height="125">


# D2L+

Multipurpose browser extension to improve the Desire-To-Learn (D2L) online learning platform.

<img src="https://github.com/DevT02/D2LPlus/assets/40608267/54156ef4-0796-4af2-8a02-ea448289222a" width="640" height="360">


## User Setup
Navigate to latest release [here](https://github.com/DevT02/D2LPlus/releases) 
1. Download `source_code.zip`
2. Unzip the `source_code.zip` 
3. Navigate to `chrome://extensions`
4. Click the `Developer Mode` toggle on
5. Press `Load Unpacked` 
6. Find the directory of the extracted extension, select, and enjoy!


## Developer Setup
***Notice***: typescript transpiler **required**

To install, ensure a package manager such as node.js is present on the machine. 
```shell
npm install -g typescript 
npm init -y 
npm install typescript --save-dev
```

Finally, to compile run `tsc`, or if you prefer a live compiler `tsc -w` 


For additional information on how to access shadowRoot elements with querySelectors, refer to 
https://github.com/DevT02/D2LPlus/blob/563c805c4f1fe818ba458d191dbfa646ad7b7a2c/src/contentScript.ts#L55-L99
