import{c as a}from"./chunks/constants.fa173a21.js";import{o as t,c as l,k as s,t as e,l as n,Q as o}from"./chunks/framework.1a91c06a.js";const p=o('<h1 id="run-an-op-stack-rollup-with-celestia-underneath" tabindex="-1">Run an OP Stack rollup with Celestia underneath <a class="header-anchor" href="#run-an-op-stack-rollup-with-celestia-underneath" aria-label="Permalink to &quot;Run an OP Stack rollup with Celestia underneath&quot;">​</a></h1><p>This guide will show you how to run your own OP Stack devnet and testnet that posts data to Celestia&#39;s Mocha testnet using <a href="https://github.com/celestiaorg/roll-op" target="_blank" rel="noreferrer">roll-op</a> and <a href="https://github.com/celestiaorg/op-plasma-celestia" target="_blank" rel="noreferrer">op-plasma-celestia</a>.</p><p>If you don&#39;t have devops experience and would like to use a Rollups as a Service (RaaS) provider, see the RaaS category in the menu.</p><h2 id="dependency-setup" tabindex="-1">Dependency setup <a class="header-anchor" href="#dependency-setup" aria-label="Permalink to &quot;Dependency setup&quot;">​</a></h2><ul><li><a href="./../nodes/celestia-node">celestia-node</a></li></ul><h3 id="setting-up-your-light-node" tabindex="-1">Setting up your light node <a class="header-anchor" href="#setting-up-your-light-node" aria-label="Permalink to &quot;Setting up your light node&quot;">​</a></h3><p>Sync and fund a Celestia light node. The light node must be <strong>fully synced</strong> and <strong>funded</strong> for you to be able to submit and retrieve <code>PayForBlobs</code> to Mocha Testnet. This allows your rollup to post and retrieve data without any errors.</p><p>In order to mount existing data, you must have a node store that is in the default directory:</p>',8),c={class:"vp-code-group vp-adaptive-theme"},r=o('<div class="tabs"><input type="radio" name="group-15097" id="tab-IxuqBgY" checked="checked"><label for="tab-IxuqBgY">Mocha</label><input type="radio" name="group-15097" id="tab-ybS5X0e"><label for="tab-ybS5X0e">Mainnet Beta</label><input type="radio" name="group-15097" id="tab-cGRh57i"><label for="tab-cGRh57i">Arabica</label></div>',1),i={class:"blocks"},d={class:"language-bash vp-adaptive-theme active"},u=s("button",{title:"Copy Code",class:"copy"},null,-1),h=s("span",{class:"lang"},"bash",-1),y={class:"shiki github-dark vp-code-dark"},_={class:"line"},E={style:{color:"#E1E4E8"}},g={class:"shiki github-light vp-code-light"},m={class:"line"},b={style:{color:"#24292E"}},v=o('<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">$HOME/.celestia-light</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">$HOME/.celestia-light</span></span></code></pre></div>',1),k={class:"language-bash vp-adaptive-theme"},C=s("button",{title:"Copy Code",class:"copy"},null,-1),q=s("span",{class:"lang"},"bash",-1),F={class:"shiki github-dark vp-code-dark"},f={class:"line"},S={style:{color:"#E1E4E8"}},w={class:"shiki github-light vp-code-light"},A={class:"line"},T={style:{color:"#24292E"}},D=o(`<p>By default, the node will run with the account named <code>my_celes_key</code> on Mocha. This is the account that needs to be funded.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Unless you changed your configuration, you won&#39;t have to change anything. 😎</p></div><h2 id="deploying-a-devnet-to-mocha" tabindex="-1">Deploying a devnet to Mocha <a class="header-anchor" href="#deploying-a-devnet-to-mocha" aria-label="Permalink to &quot;Deploying a devnet to Mocha&quot;">​</a></h2><p>See <a href="https://github.com/celestiaorg/op-plasma-celestia/blob/main/README.md" target="_blank" rel="noreferrer">the Alt-DA x Celestia README</a> for instructions on <a href="https://github.com/celestiaorg/op-plasma-celestia/blob/main/README.md#devnet" target="_blank" rel="noreferrer">how to deploy a Devnet</a>.</p><div class="tip custom-block"><p class="custom-block-title">TIP for macOS users</p><p>If you are on macOS, you will need to run a <code>venv</code> before starting <code>roll-op</code>.</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> $HOME</span><span style="color:#9ECBFF;">/roll-op</span></span>
<span class="line"><span style="color:#B392F0;">python3</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">venv</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./venv</span></span>
<span class="line"><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./venv/bin/activate</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> $HOME</span><span style="color:#032F62;">/roll-op</span></span>
<span class="line"><span style="color:#6F42C1;">python3</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">venv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./venv</span></span>
<span class="line"><span style="color:#005CC5;">source</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./venv/bin/activate</span></span></code></pre></div></div><p>Congrats! Your devnet is running on a mock EVM chain and Celestia Mocha.</p><h2 id="deploying-a-testnet-to-an-l1-or-l2-and-mocha" tabindex="-1">Deploying a testnet to an L1 (or L2) and Mocha <a class="header-anchor" href="#deploying-a-testnet-to-an-l1-or-l2-and-mocha" aria-label="Permalink to &quot;Deploying a testnet to an L1 (or L2) and Mocha&quot;">​</a></h2><p>See <a href="https://github.com/celestiaorg/op-plasma-celestia/blob/main/README.md" target="_blank" rel="noreferrer">the Alt-DA x Celestia README</a> for instructions on <a href="https://github.com/celestiaorg/op-plasma-celestia/blob/main/README.md#testnet" target="_blank" rel="noreferrer">how to deploy a Testnet</a>.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you are using a public RPC for your EVM chain, you should to enable <code>deploy_slowly = true</code> in your <code>config.toml</code>. If you still have issues, we recommend running the integration with a high-availability, paid endpoint.</p></div><p>When you are deploying to a live EVM network, pay attention and modify the configuration to post to non-Sepolia EVM chains.</p><p>Here is an example:</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Chain ID of your rollup</span></span>
<span class="line"><span style="color:#E1E4E8;">l2_chain_id = </span><span style="color:#79B8FF;">1117733</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Sepolia Ethereum</span></span>
<span class="line"><span style="color:#E1E4E8;">l1_chain_id = </span><span style="color:#79B8FF;">11155111</span></span>
<span class="line"><span style="color:#E1E4E8;">l1_rpc_url = </span><span style="color:#9ECBFF;">&quot;https://ethereum-sepolia-rpc.publicnode.com&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">## Avoid issues with public RPC</span></span>
<span class="line"><span style="color:#E1E4E8;">deploy_slowly = </span><span style="color:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">## Keys</span></span>
<span class="line"><span style="color:#E1E4E8;">contract_deployer_account = </span><span style="color:#9ECBFF;">&quot;0xaddress&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">contract_deployer_key = </span><span style="color:#9ECBFF;">&quot;privatekey&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">batcher_account = </span><span style="color:#9ECBFF;">&quot;0xaddress&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">batcher_key = </span><span style="color:#9ECBFF;">&quot;privatekey&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">proposer_account = </span><span style="color:#9ECBFF;">&quot;0xaddress&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">proposer_key = </span><span style="color:#9ECBFF;">&quot;privatekey&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">admin_account = </span><span style="color:#9ECBFF;">&quot;0xaddress&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">admin_key = </span><span style="color:#9ECBFF;">&quot;privatekey&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">p2p_sequencer_account = </span><span style="color:#9ECBFF;">&quot;0xaddress&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">p2p_sequencer_key = </span><span style="color:#9ECBFF;">&quot;privatekey&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Chain ID of your rollup</span></span>
<span class="line"><span style="color:#24292E;">l2_chain_id = </span><span style="color:#005CC5;">1117733</span><span style="color:#24292E;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Sepolia Ethereum</span></span>
<span class="line"><span style="color:#24292E;">l1_chain_id = </span><span style="color:#005CC5;">11155111</span></span>
<span class="line"><span style="color:#24292E;">l1_rpc_url = </span><span style="color:#032F62;">&quot;https://ethereum-sepolia-rpc.publicnode.com&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">## Avoid issues with public RPC</span></span>
<span class="line"><span style="color:#24292E;">deploy_slowly = </span><span style="color:#005CC5;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">## Keys</span></span>
<span class="line"><span style="color:#24292E;">contract_deployer_account = </span><span style="color:#032F62;">&quot;0xaddress&quot;</span></span>
<span class="line"><span style="color:#24292E;">contract_deployer_key = </span><span style="color:#032F62;">&quot;privatekey&quot;</span></span>
<span class="line"><span style="color:#24292E;">batcher_account = </span><span style="color:#032F62;">&quot;0xaddress&quot;</span></span>
<span class="line"><span style="color:#24292E;">batcher_key = </span><span style="color:#032F62;">&quot;privatekey&quot;</span></span>
<span class="line"><span style="color:#24292E;">proposer_account = </span><span style="color:#032F62;">&quot;0xaddress&quot;</span></span>
<span class="line"><span style="color:#24292E;">proposer_key = </span><span style="color:#032F62;">&quot;privatekey&quot;</span></span>
<span class="line"><span style="color:#24292E;">admin_account = </span><span style="color:#032F62;">&quot;0xaddress&quot;</span></span>
<span class="line"><span style="color:#24292E;">admin_key = </span><span style="color:#032F62;">&quot;privatekey&quot;</span></span>
<span class="line"><span style="color:#24292E;">p2p_sequencer_account = </span><span style="color:#032F62;">&quot;0xaddress&quot;</span></span>
<span class="line"><span style="color:#24292E;">p2p_sequencer_key = </span><span style="color:#032F62;">&quot;privatekey&quot;</span></span></code></pre></div><p>Your <code>0xaddress</code> key must also be funded with testnet ETH. We recommend at least 10 SepoliaETH to get your chain started, but you will need more to keep it running longer.</p><h2 id="congratulations" tabindex="-1">Congratulations <a class="header-anchor" href="#congratulations" aria-label="Permalink to &quot;Congratulations&quot;">​</a></h2><p>Congrats! You now have an OP Stack rollup running with Celestia underneath.</p><p>You can <a href="https://docs.optimism.io/builders/chain-operators/features/alt-da-mode#setup-your-da-server" target="_blank" rel="noreferrer">learn more about Alt-DA in Optimism docs</a>.</p>`,16),O=JSON.parse('{"title":"Run an OP Stack rollup with Celestia underneath","description":"Start your own rollup with op-plasma-celestia and roll-op.","frontmatter":{"description":"Start your own rollup with op-plasma-celestia and roll-op.","head":[["meta",{"name":"og:title","content":"Run an OP Stack rollup with Celestia underneath | Celestia Docs"},{"name":"og:description","content":false}]]},"headers":[],"relativePath":"developers/optimism.md","filePath":"developers/optimism.md","lastUpdated":1726560482000}'),B={name:"developers/optimism.md"},V=Object.assign(B,{setup(P){return(M,x)=>(t(),l("div",null,[p,s("div",c,[r,s("div",i,[s("div",d,[u,h,s("pre",y,[s("code",null,[s("span",_,[s("span",E,"$HOME/.celestia-light-"+e(n(a).mochaChainId),1)])])]),s("pre",g,[s("code",null,[s("span",m,[s("span",b,"$HOME/.celestia-light-"+e(n(a).mochaChainId),1)])])])]),v,s("div",k,[C,q,s("pre",F,[s("code",null,[s("span",f,[s("span",S,"$HOME/.celestia-light-"+e(n(a).arabicaChainId),1)])])]),s("pre",w,[s("code",null,[s("span",A,[s("span",T,"$HOME/.celestia-light-"+e(n(a).arabicaChainId),1)])])])])])]),D]))}});export{O as __pageData,V as default};
