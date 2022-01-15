/*!
 *  build: vue-admin-beautiful 
 *  vue-admin-beautiful author: chuzhixin 1204505056@qq.com 
 *  vue-admin-beautiful QQ Group(QQ群): 972435319、1139183756 
 *  time: 2022-1-15 15:05:24
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2384439e"],{9080:function(b,e,a){"use strict";a("e276")},af4d:function(b,e,a){"use strict";a.r(e);var f=a("1da1"),d=(a("96cf"),a("f2bf")),c=a("e9df"),t={class:"ant-card ant-card-bordered"},n={class:"ant-card-body"},s=Object(d["m"])("div",{class:"field"},[Object(d["m"])("div",{class:"control"},[Object(d["m"])("p",{class:"help is-info"},"Fee: 0.1 BNB"),Object(d["m"])("p",{class:"help is-info"},"*")])],-1),l={class:"field"},r=Object(d["m"])("label",{for:"tokenName",class:"label"},[Object(d["o"])(" Name "),Object(d["m"])("sup",{class:"has-text-danger"},"*")],-1),o={class:"control"},i=Object(d["n"])('<div class="field"><label for="tokenSymbol" class="label"> Symbol <sup class="has-text-danger">*</sup></label><div class="control"><input type="text" class="input" id="tokenSymbol" name="tokenSymbol" placeholder="Ex: ETH" maxlength="255"></div></div><div class="field"><label for="tokenDecimals" class="label"> Decimals <sup class="has-text-danger">*</sup></label><div class="control"><input type="number" class="input" id="tokenDecimals" name="tokenDecimals" placeholder="Ex: 18" value="18"></div></div><div class="field"><label for="totalSupply" class="label"> Total supply <sup class="has-text-danger">*</sup></label><div class="control"><input type="text" class="input" id="totalSupply" name="totalSupply" placeholder="Ex: 100000000000"></div></div><div class="field"></div><div class="has-text-centered mt-6 mb-4"></div>',5),u=Object(d["m"])("p",null," After creation, please check your address in BSC browser and check your token(*) ",-1),p={class:"butt"},m=Object(d["m"])("span",null,"Create token",-1),v=[m],j=Object(d["m"])("br",null,null,-1),O={setup:function(b){var e=Object(d["t"])("web3j"),a=Object(d["M"])("");function m(){return O.apply(this,arguments)}function O(){return O=Object(f["a"])(regeneratorRuntime.mark((function b(){var f,d,t,n,s,l,r,o,i,u,p,m,v;return regeneratorRuntime.wrap((function(b){while(1)switch(b.prev=b.next){case 0:return f="0x608060405260405162000ff938038062000ff98339810160408190526200002691620003f0565b620000313362000128565b85516200004690600390602089019062000297565b5084516200005c90600490602088019062000297565b506005805460ff191660ff86161790556200008a620000836000546001600160a01b031690565b8462000178565b306200009e6000546001600160a01b031690565b6001600160a01b03167f56358b41df5fa59f5639228f0930994cbdde383c8a8fd74e06c04e1deebe356260006001604051620000dc929190620004a3565b60405180910390a36040516001600160a01b0383169082156108fc029083906000818181858888f193505050501580156200011b573d6000803e3d6000fd5b5050505050505062000548565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b038216620001d35760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b620001ef816006546200028260201b620005401790919060201c565b6006556001600160a01b038216600090815260016020908152604090912054620002249183906200054062000282821b17901c565b6001600160a01b0383166000818152600160205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90620002769085815260200190565b60405180910390a35050565b6000620002908284620004d0565b9392505050565b828054620002a590620004f5565b90600052602060002090601f016020900481019282620002c9576000855562000314565b82601f10620002e457805160ff191683800117855562000314565b8280016001018555821562000314579182015b8281111562000314578251825591602001919060010190620002f7565b506200032292915062000326565b5090565b5b8082111562000322576000815560010162000327565b600082601f8301126200034e578081fd5b81516001600160401b03808211156200036b576200036b62000532565b604051601f8301601f19908116603f0116810190828211818310171562000396576200039662000532565b81604052838152602092508683858801011115620003b2578485fd5b8491505b83821015620003d55785820183015181830184015290820190620003b6565b83821115620003e657848385830101525b9695505050505050565b60008060008060008060c0878903121562000409578182fd5b86516001600160401b038082111562000420578384fd5b6200042e8a838b016200033d565b9750602089015191508082111562000444578384fd5b506200045389828a016200033d565b955050604087015160ff811681146200046a578283fd5b6060880151608089015191955093506001600160a01b03811681146200048e578283fd5b8092505060a087015190509295509295509295565b6040810160088410620004c657634e487b7160e01b600052602160045260246000fd5b9281526020015290565b60008219821115620004f057634e487b7160e01b81526011600452602481fd5b500190565b600181811c908216806200050a57607f821691505b602082108114156200052c57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b610aa180620005586000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063715018a611610097578063a9059cbb11610066578063a9059cbb146101f1578063dd62ed3e14610204578063f2fde38b1461023d578063ffa1ad741461025057600080fd5b8063715018a6146101b15780638da5cb5b146101bb57806395d89b41146101d6578063a457c2d7146101de57600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063395093511461017557806370a082311461018857600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610258565b60405161010f9190610946565b60405180910390f35b61012b61012636600461091d565b6102ea565b604051901515815260200161010f565b6006545b60405190815260200161010f565b61012b61015b3660046108e2565b610300565b60055460405160ff909116815260200161010f565b61012b61018336600461091d565b610369565b61013f610196366004610896565b6001600160a01b031660009081526001602052604090205490565b6101b961039f565b005b6000546040516001600160a01b03909116815260200161010f565b61010261040a565b61012b6101ec36600461091d565b610419565b61012b6101ff36600461091d565b610468565b61013f6102123660046108b0565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6101b961024b366004610896565b610475565b61013f600181565b606060038054610267906109bd565b80601f0160208091040260200160405190810160405280929190818152602001828054610293906109bd565b80156102e05780601f106102b5576101008083540402835291602001916102e0565b820191906000526020600020905b8154815290600101906020018083116102c357829003601f168201915b5050505050905090565b60006102f7338484610553565b50600192915050565b600061030d848484610678565b61035f843361035a85604051806060016040528060288152602001610a1f602891396001600160a01b038a16600090815260026020908152604080832033845290915290205491906107fe565b610553565b5060019392505050565b3360008181526002602090815260408083206001600160a01b038716845290915281205490916102f791859061035a9086610540565b6000546001600160a01b031633146103fe5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b610408600061082a565b565b606060048054610267906109bd565b60006102f7338461035a85604051806060016040528060258152602001610a47602591393360009081526002602090815260408083206001600160a01b038d16845290915290205491906107fe565b60006102f7338484610678565b6000546001600160a01b031633146104cf5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103f5565b6001600160a01b0381166105345760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103f5565b61053d8161082a565b50565b600061054c8284610999565b9392505050565b6001600160a01b0383166105b55760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103f5565b6001600160a01b0382166106165760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103f5565b6001600160a01b0383811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166106dc5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103f5565b6001600160a01b03821661073e5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103f5565b61077b816040518060600160405280602681526020016109f9602691396001600160a01b03861660009081526001602052604090205491906107fe565b6001600160a01b0380851660009081526001602052604080822093909355908416815220546107aa9082610540565b6001600160a01b0380841660008181526001602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9061066b9085815260200190565b600081848411156108225760405162461bcd60e51b81526004016103f59190610946565b505050900390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b038116811461089157600080fd5b919050565b6000602082840312156108a7578081fd5b61054c8261087a565b600080604083850312156108c2578081fd5b6108cb8361087a565b91506108d96020840161087a565b90509250929050565b6000806000606084860312156108f6578081fd5b6108ff8461087a565b925061090d6020850161087a565b9150604084013590509250925092565b6000806040838503121561092f578182fd5b6109388361087a565b946020939093013593505050565b6000602080835283518082850152825b8181101561097257858101830151858201604001528201610956565b818111156109835783604083870101525b50601f01601f1916929092016040019392505050565b600082198211156109b857634e487b7160e01b81526011600452602481fd5b500190565b600181811c908216806109d157607f821691505b602082108114156109f257634e487b7160e01b600052602260045260246000fd5b5091905056fe45524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220e8547693d17d027b6f4decf06d2709720e0dbce30f7755fbc6f4b3f076086c4d64736f6c63430008040033",d=Object(c["IERC20"])().StandardTokenAbi,t=e.currentProvider.selectedAddress,n=h("tokenName"),s=h("tokenSymbol"),l=h("tokenDecimals"),r=h("totalSupply"),o=[n,s,l,e.utils.toWei(r,l+""),e.utils.toHex("1445999256331946928210944736789335119173171198836"),"0x16345785d8a0000"],i=e.eth.abi.encodeFunctionCall(d[0],o).substring(10),b.next=11,e.eth.getGasPrice();case 11:return u=b.sent,b.next=14,e.eth.estimateGas({from:t,data:f+i,value:"0x16345785d8a0000"});case 14:return p=b.sent,b.next=17,e.eth.sendTransaction({gas:p,from:t,gasPrice:u,data:f+i,value:"0x16345785d8a0000"},(function(b,e){}));case 17:m=b.sent,a.value=m.contractAddress,v="https://bscscan.com/address/"+m.contractAddress,window.open(v);case 21:case"end":return b.stop()}}),b)}))),O.apply(this,arguments)}function h(b){var e=document.getElementById(b);return e.value}return function(b,e){return Object(d["H"])(),Object(d["l"])("div",t,[Object(d["m"])("div",n,[Object(d["m"])("form",null,[s,Object(d["m"])("div",l,[r,Object(d["m"])("div",o,[Object(d["bb"])(Object(d["m"])("input",{type:"text",class:"input",id:"tokenName",name:"tokenName",placeholder:"Ex: Ethereum",maxlength:"255","onUpdate:modelValue":e[0]||(e[0]=function(e){return b.sdd=e})},null,512),[[d["W"],b.sdd]])])]),i]),u,Object(d["m"])("div",p,[Object(d["m"])("button",{class:"ant-btn ant-btn-primary",onClick:e[1]||(e[1]=function(b){return m()})},v)]),j,Object(d["m"])("div",null,"token:"+Object(d["S"])(Object(d["V"])(a)),1)])])}}};a("9080");const h=O;e["default"]=h},e276:function(b,e,a){}}]);