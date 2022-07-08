## 스키마를 먼저 짜고

## 전에 만들었던 내용을 데이터베이스에 저장

## 저장한 내용을 웹페이지에 띄워주면 됨?

블록 생성 -> 블록 내용과 tx 내용을 Back서버에 보내고 db에 저장

geth --datadir node --ws --ws.addr "0.0.0.0" --ws.port 9000 --http.corsdomain "\*" --ws.api "admin,eth,debug,miner,net,txpool,personal,web3" --syncmode full --networkid 1213 --port 30300 --allow-insecure-unlock

geth attach "ws://127.0.0.1:9000"

/**
{
difficulty: '522833',
extraData: '0xd883010a14846765746888676f312e31382e33856c696e7578',
gasLimit: 5181737,
gasUsed: 0,
hash: '0x12938477f5381758f45dce96161c0419c86b534a64e80013a9300f4c01f1e08c',
logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
miner: '0x7557A6726a49c9b9AD5205d10b4339DB19e69D36',
mixHash: '0xd005305bff726d47e9548c77b534bce6d34d9b2ce03da0af0b1c82b96f7e0003',
nonce: '0x3f0c5b2195540cae',
number: 100,
parentHash: '0xbbb6ac8ecb22de86036351cb9b81cb9298d7c4b6cb0ffc4b692d8ad86cad35d2',
receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
size: 536,
stateRoot: '0xa2de18ba6ac025def02cefd13ab1718fffdb191506e6115d55b63e33be336efe',
timestamp: 1656641732,
totalDifficulty: '51615566',
transactions: [],
transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
uncles: []
}
**/

/**
tx Recipt : {
blockHash: '0x5b5882b85c926cb6500e583f6ffbb9bc3a409324bfca590ccbb419a822c602ce',
blockNumber: 139,
contractAddress: null,
cumulativeGasUsed: 21000,
effectiveGasPrice: 1000000000,
from: '0x7557a6726a49c9b9ad5205d10b4339db19e69d36',
gasUsed: 21000,
logs: [],
logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
status: true,
to: '0x9bf0de7c4f41cf706d666cb4045649c3f719f8c7',
transactionHash: '0x7d9daea9a776226349f90e070e9400989355ecbff5cc49f817f15cbdb0a83ac7',
transactionIndex: 0,
type: '0x0'
}
**/

---

{
blockHash: '0x136d0e608776cdf61cb4a96631076c61970e557774d93ac006d7af073e712044',
blockNumber: 270,
from: '0x3C9b17a493558da518fF12b81df75E673eC59Ab6',
gas: 21000,
gasPrice: '1000000000',
hash: '0xa8820b8d2c51151ebb800df0e88f244c676bd58e269b7091faaa1f288b7f9a0d',
input: '0x',
nonce: 0,
to: '0xF171fA59e634969237293eE56551dd4DEB577461',
transactionIndex: 0,
value: '10000000000000000000',
type: 0,
v: '0x99e',
r: '0x4fc3f93921204cb6f0e2e1900a1f0d5559b8333040e593a5b0788b4a65f4e6a9',
s: '0x63efdb64baf8b1717363be691656e630b8fd651bbaf8efc4c55bf77c0147a9b8'
},

---

{
blockHash: '0x10428e85107cc4a8b6d09b56167e20289779e65d95fc2322e9160c7f51a84cb3',
blockNumber: 282,
contractAddress: null,
cumulativeGasUsed: 42000,
effectiveGasPrice: 1000000000,
from: '0x3c9b17a493558da518ff12b81df75e673ec59ab6',
gasUsed: 21000,
logs: [],
logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
status: true,
to: '0xf171fa59e634969237293ee56551dd4deb577461',
transactionHash: '0x82c9a1f25ea3477e5cb1f0e58cc14b64a539756ba96f32ff19d9283b1fe950cf',
transactionIndex: 1,
type: '0x0'
}

personal.sendTransaction({from:'f171fa59e634969237293ee56551dd4deb577461',to : eth.coinbase,value:web3.toWei(10,"ether")},"1234")

timestamp
number
difficulty
miner
hash
nonce

<ul key={k}>
    <li>parentHash : {v.parentHash}</li>
    <li>miner : {v.miner}</li>
    <li>stateRoot : {v.stateRoot}</li>
    <li>transactionsRoot : {v.transactionsRoot}</li>
    <li>receiptsRoot : {v.receiptsRoot}</li>
    <li>difficulty : {v.difficulty}</li>
    <li>number : {v.number}</li>
    <li>gasLimit : {v.gasLimit}</li>
    <li>gasUsed : {v.gasUsed}</li>
    <li>timestamp : {v.timestamp}</li>
    <li>extraData : {v.extraData}</li>
    <li>mixHash : {v.mixHash}</li>
    <li>nonce : {v.nonce}</li>
    <li>hash : {v.hash}</li>
    <li>size : {v.size}</li>
</ul>

From
to
account
timestamp

baseFeePerGas: null
difficulty: "187610"
extraData: "0xd883010a14846765746888676f312e31382e33856c696e7578"
gasLimit: 8030906
gasUsed: 0
hash: "0x118a735d27d1704b47a8f380ca26bd23b44bc1d675725f9dcbd0800ea49f86e3"
id: 583
miner: "0x3C9b17a493558da518fF12b81df75E673eC59Ab6"
mixHash: "0x4d01cccba6c45243efdf00d4aba2ae0dfd606e0eaa9548c1bb412be5321effc6"
nonce: "0x7f5ae0e5b9760f33"
number: 549
parentHash: "0x6230785c5a730246ca1a6f257ab04fc345a841a0cae0b4644c4dbc1a8a0af363"
receiptsRoot: "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"
sha3Uncles: "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347"
size: 538
stateRoot: "0x71df37664dd045ca8ec32350f433bf37d6186c9ba3101412609215b2424e6091"
timestamp: 1657004304
transactionsRoot: "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421"

blockHash: "0xe148fa8450dfa9ae4e2aff792530fc22058316fae7d574b95895fff8323f0b7e"
blockNumber: 371
contractAddress: null
cumulativeGasUsed: 42000
effectiveGasPrice: 1000000000
from: "0x3c9b17a493558da518ff12b81df75e673ec59ab6"
gasUsed: 21000
id: 40
status: true
to: "0xf171fa59e634969237293ee56551dd4deb577461"
transactionHash: "0xc70cffc111f1f306805d03e21e6bad19a1f836e24d673057b5e67f2ff91a2cc4"
transactionIndex: 1
type: "0x0"

Block {
dataValues: {
id: 1,
difficulty: '524288',
extraData: '0x0000000000000000000000000000000000000000000000000000000000000000',
gasLimit: 4700000,
gasUsed: 0,
hash: '0x93f0b736c0cc2f39668ac715eea26b0da2989f65f6b5c20e9ca9603dad370ee0',
miner: '0x0000000000000000000000000000000000000000',
mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
nonce: '0x0000000000000000',
number: 0,
parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
size: 543,
stateRoot: '0x2316788a87daf3142500da03a0957ce775727d438a5430c87087ebf180a853ad',
timestamp: 1656895047,
baseFeePerGas: null,
transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421'
},
\_previousDataValues: {
id: 1,
difficulty: '524288',
extraData: '0x0000000000000000000000000000000000000000000000000000000000000000',
gasLimit: 4700000,
gasUsed: 0,
hash: '0x93f0b736c0cc2f39668ac715eea26b0da2989f65f6b5c20e9ca9603dad370ee0',
miner: '0x0000000000000000000000000000000000000000',
mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
nonce: '0x0000000000000000',
number: 0,
parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
size: 543,
stateRoot: '0x2316788a87daf3142500da03a0957ce775727d438a5430c87087ebf180a853ad',
timestamp: 1656895047,
baseFeePerGas: null,
transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421'

## Geth

## 오늘 할것

-   RPC 통신

-   MetaMask 테스트

-   Transaction 테스트

-   Transaction Pool에 내 Trnansaction이 있는지 확인후 mining을 합니다.

-   Nodejs 환경에서 web3 라이브러리를 이용하여 Geth와 연결해볼 것입니다.

---

`node`라는 디렉토리를 하나 생성합니다. datadir로 사용할 것입니다.

geth --datadir node account new - 바로 계정 생성

제네시스 json 파일 생성하기

```js

/* Genesis.json */
{
  "config": {
    "chainId": 7722,
    "homesteadBlock": 0,
    "eip150Block": 0,
    "eip150Hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "eip155Block": 0,
    "eip158Block": 0,
    "byzantiumBlock": 0,
    "constantinopleBlock": 0,
    "petersburgBlock": 0,
    "istanbulBlock": 0,
    "ethash": {}
  },
  "nonce": "0x0",
  "timestamp": "0x62bd7dc2",
  "extraData": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "gasLimit": "0x47b760",
  "difficulty": "0x80000",
  "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "coinbase": "0x0000000000000000000000000000000000000000",
  "alloc": {
    "7188630a24591fdb0218d94b53a80091fa5507b8": {
      "balance": "0x200000000000000000000000000000000000000000000000000000000000000"
    },
    "aaa3e898bd61216387edb4f878ae0e1f712cbef2": {
      "balance": "0x200000000000000000000000000000000000000000000000000000000000000"
    },
    "be7388f4d2f72ad4abf49355c920152365ca0594": {
      "balance": "0x200000000000000000000000000000000000000000000000000000000000000"
    }
  },
  "number": "0x0",
  "gasUsed": "0x0",
  "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "baseFeePerGas": null
}

```

go-ethereum 디렉토리에서 `make all`을 합니다.

설치후 build/bin 디렉토리에서 puppeth, bootnode <-- 파일들이 설치되어있는지 확인합니다.
puppeth - 설정 파일 도와주는 파일 ex) genesis.json
bootnode - peer 연결을 할때 도와주는 노드입니다.

`puppeth` 명령어로 터미널에서 puppeth 실행

jongs ( 사용할 네트워크 이름 입력 )
2 ( Configure new genesis )
1 ( Create new genesis from scratch )
1 ( Ethash - proof-of-work )
geth --datadir node account new에서 생성한 지갑 adress 복사후 입력
yes
7722 ( Network ID )
2 ( Manage existing genesis )
2 ( Export genesis configurations )
jongs ( 생성할 디렉토리명 )
jongs 디렉토리에 jongs.json 생성 확인

---

geth --datadir node init "./jongs/jongs.json"

node 디렉토리에 geth 폴더 생성확인

-   rpc 통신을 하겠다고 선언, 모든 접속 허용, 포트 설정 , cors 설정, 사용할 api들 설정, syncmode 설정

geth --datadir node --http --http.addr "0.0.0.0" --http.port 9000 --http.corsdomain "\*" --http.api "admin,miner,txpool,web3,personal,eth" --syncmode full --networkid 7722

geth attach "http://127.0.0.1:9000"

eth.chainId()

MetaMask 네트워크 추가하기 - 점심먹고 ㄱ

geth --datadir node --http --http.addr "0.0.0.0" --http.port 9000 --http.corsdomain "\*" --http.api "admin,eth,debug,miner,net,txpool,personal,web3" --syncmode full --networkid 7722 --port 30300 --allow-insecure-unlock

리눅스 ip를 넣어서 네트워크 생성하면 됩니다.

explorer 디렉토리 생성
cd explorer
npm init -y
npm install web3 jest
jest 셋팅 후 작업

-   block.test.js

```js
const Web3 = require('web3');

describe('web3 테스트', () => {
	let web3;

	it('테스트', async () => {
		web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9000'));

		// 블록 넘버 출력
		const blockNumber = await web3.eth.getBlockNumber();
		console.log(blockNumber);

		// 100번째 블록에 대한 내용 출력
		const block = await web3.eth.getBlock(100, true);
		console.log(block);

		for (let i = 1; i < blockNumber; i++) {
			// 블록에 대한 내용 출력
			const block = await web3.eth.getBlock(100, true);
			console.log(block);
			for (let j = 0; j < block.transactions.length; j++) {
				// 블록에 대한 모든 Transaction 내용 출력
				console.log(block.transactions[j]);
			}
		}
	});
});
```

Transaction 보내보기

-   지갑1 = 7557a6726a49c9b9ad5205d10b4339db19e69d36
-   지갑2 = 9bf0de7c4f41cf706d666cb4045649c3f719f8c7

personal.newAccount('1234') 새로운 지갑 생성

eth.getBalance(eth.coinbase)로 가지고 있는 ether 확인하기
eth.getBalance('9bf0de7c4f41cf706d666cb4045649c3f719f8c7')로 가지고 있는 ether 확인하기

**sendTransaction 명령어**

```js
personal.sendTransaction(
	{
		from: eth.coinbase,
		to: '9bf0de7c4f41cf706d666cb4045649c3f719f8c7',
		value: web3.toWei(10, 'ether'),
	},
	'1234', // Account 만들때 사용했던 패스워드
);
```

personal.sendTransaction({from:eth.coinbase,to : '0xf171fa59e634969237293ee56551dd4deb577461',value:web3.toWei(10,"ether")},"1234")

트랜잭션을 보냈지만 아직 그 내용이 Transaction Pool에 들어있기 때문에 getbalance를 해도 0으로 표시됩니다.

miner.start(1)로 블록 마이닝하기 이때 블록 넘버 확인하기!

miner.stop()

다시 eth.getBalance(eth.coinbase) 와 eth.getBalance('9bf0de7c4f41cf706d666cb4045649c3f719f8c7') 하면 ether가 옮겨져 있는것을 확인할 수 있습니다.

test 코드로 getBlock으로 채굴한 블록을 확인하여 Transaction이 담겨있는지 확인합니다.

test코드로 Transaction 내용을 확인합니다.

```js
// Transaction 내부를 확인하는 메서드
it('getTransaction', async () => {
	// getTransaction()
	// 인자값 = Transaction Hash값
	// TxPool에 있는 내용
	// 사용자가 서명까지 완료되서 우리의 노드서버에게 보내준 데이터 형태
	const tx = await web3.eth.getTransaction('0x7d9daea9a776226349f90e070e9400989355ecbff5cc49f817f15cbdb0a83ac7');
	console.log('tx :', tx);
});

it('getTransactionRecipt', async () => {
	// getTransactionRecipt()
	// 인자값 = Transaction Hash값
	// 블록에 있는 내용
	// geth가 블록안에 넣었던 EVM을 거쳤다가 들어간 트랜잭션의 결과물
	const tx = await web3.eth.getTransactionReceipt('0x7d9daea9a776226349f90e070e9400989355ecbff5cc49f817f15cbdb0a83ac7');
	console.log('tx Recipt :', tx);
});
```

eth.fromWei(eth.getBalance(eth.coinbase))

personal.sendTransaction({from:eth.coinbase,to : '0xf171fa59e634969237293ee56551dd4deb577461',value:web3.toWei(10,"ether")},"1234")

**CSS**
**Private Network 다시 만들기**
