(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[36],{9865:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/installation/source/linux",function(){return t(7462)}])},7845:function(e,n,t){"use strict";var a=t(5893);n.Z={github:"https://github.com/wiocoin/website",docsRepositoryBase:"https://github.com/wiocoin/website/blob/master",titleSuffix:" \u2013 Wiocoin",logo:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"mr-2 font-extrabold hidden md:inline",children:"Wiocoin (WIO)"}),(0,a.jsx)("span",{className:"text-gray-600 font-normal hidden md:inline",children:"World is One Coin"})]}),head:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,a.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,a.jsx)("meta",{name:"description",content:"Wiocoin: the Next.js site builder"}),(0,a.jsx)("meta",{name:"og:description",content:"Wiocoin: the Next.js site builder"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://wiocoin.vercel.app/og.png"}),(0,a.jsx)("meta",{name:"twitter:site:domain",content:"wiocoin.vercel.app"}),(0,a.jsx)("meta",{name:"twitter:url",content:"https://wiocoin.vercel.app"}),(0,a.jsx)("meta",{name:"og:title",content:"Wiocoin: Next.js static site generator"}),(0,a.jsx)("meta",{name:"og:image",content:"https://wiocoin.vercel.app/og.png"}),(0,a.jsx)("meta",{name:"apple-mobile-web-app-title",content:"Wiocoin"}),(0,a.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180x180.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/android-icon-192x192.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/favicon-96x96.png"}),(0,a.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,a.jsx)("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"})]}),search:!0,prevLinks:!0,nextLinks:!0,footer:!0,footerEditLink:"Edit this page on GitHub",footerText:(0,a.jsxs)(a.Fragment,{children:["MIT ",(new Date).getFullYear()," \xa9 Wiocoin."]}),unstable_faviconGlyph:"\ud83d\udc4b"}},7462:function(e,n,t){"use strict";t.r(n);t(7294);var a=t(3905),i=t(7829),l=t.n(i),o=t(3805),d=t(7845);function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=function(e){return(0,o.withSSG)(l()({filename:"C:/Users/lenovo/Documents/GitHub/website/pages/installation/source/linux.mdx",route:"/installation/source/linux",meta:{},pageMap:[{name:"get-started",route:"\\get-started"},{name:"index",route:"\\"},{name:"installation",children:[{name:"download",children:[{name:"index",route:"\\installation\\download"},{name:"macosx",route:"\\installation\\download\\macosx"},{name:"meta.json",meta:{index:"Windows 10/8/7",macosx:"MacOS",unix:"Linux/Unix X86/64"}},{name:"unix",route:"\\installation\\download\\unix"}],route:"\\installation\\download"},{name:"meta.json",meta:{source:"From Source",download:"Downloads"}},{name:"source",children:[{name:"bsd",route:"\\installation\\source\\bsd"},{name:"index",route:"\\installation\\source"},{name:"linux",route:"\\installation\\source\\linux"},{name:"meta.json",meta:{index:"Windows Build",linux:"Unix Build",osx:"Mac OS Build",bsd:"Build on OpenBSD"}},{name:"osx",route:"\\installation\\source\\osx"}],route:"\\installation\\source"}],route:"\\installation"},{name:"meta.json",meta:{index:"Introduction","get-started":"Development Process",testing:"Testing",installation:"Installation",runnig:"Running"}},{name:"running",children:[{name:"meta.json",meta:{running:"Using Wiocoind and Wiocoin-cli"}},{name:"running",route:"\\running\\running"}],route:"\\running"},{name:"testing",route:"\\testing"}]},d.Z))(e)};function m(e){var n=e.components,t=r(e,["components"]);return(0,a.mdx)(s,Object.assign({components:n},t),(0,a.mdx)("h1",null,"UNIX BUILD NOTES"),(0,a.mdx)("p",null,"====================\r\nSome notes on how to build Wiocoin Core in Unix."),(0,a.mdx)("p",null,"(For BSD specific instructions, see ",(0,a.mdx)("inlineCode",{parentName:"p"},"build-*bsd.md")," in this directory.)"),(0,a.mdx)("h2",null,"Note"),(0,a.mdx)("p",null,"Always use absolute paths to configure and compile Wiocoin Core and the dependencies.\r\nFor example, when specifying the path of the dependency:"),(0,a.mdx)("p",null,"../dist/configure --enable-cxx --disable-shared --with-pic --prefix=$BDB_PREFIX"),(0,a.mdx)("p",null,"Here BDB_PREFIX must be an absolute path - it is defined using $(pwd) which ensures\r\nthe usage of the absolute path."),(0,a.mdx)("h2",null,"To Build"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{className:"language-bash",parentName:"pre"},"./autogen.sh\r\n./configure\r\nmake\r\nmake install # optional\n")),(0,a.mdx)("p",null,"This will build wiocoin-qt as well, if the dependencies are met."),(0,a.mdx)("h2",null,"Dependencies"),(0,a.mdx)("p",null,"These dependencies are required:"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr"},"Library"),(0,a.mdx)("th",{parentName:"tr"},"Purpose"),(0,a.mdx)("th",{parentName:"tr"},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr"},"libssl"),(0,a.mdx)("td",{parentName:"tr"},"Crypto"),(0,a.mdx)("td",{parentName:"tr"},"Random Number Generation, Elliptic Curve Cryptography")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr"},"libboost"),(0,a.mdx)("td",{parentName:"tr"},"Utility"),(0,a.mdx)("td",{parentName:"tr"},"Library for threading, data structures, etc")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr"},"libevent"),(0,a.mdx)("td",{parentName:"tr"},"Networking"),(0,a.mdx)("td",{parentName:"tr"},"OS independent asynchronous networking")))),(0,a.mdx)("p",null,"Optional dependencies:"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr"},"Library"),(0,a.mdx)("th",{parentName:"tr"},"Purpose"),(0,a.mdx)("th",{parentName:"tr"},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr"},"miniupnpc"),(0,a.mdx)("td",{parentName:"tr"},"UPnP Support"),(0,a.mdx)("td",{parentName:"tr"},"Firewall-jumping support")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr"},"libdb4.8"),(0,a.mdx)("td",{parentName:"tr"},"Berkeley DB"),(0,a.mdx)("td",{parentName:"tr"},"Wallet storage (only needed when wallet enabled)")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr"},"qt"),(0,a.mdx)("td",{parentName:"tr"},"GUI"),(0,a.mdx)("td",{parentName:"tr"},"GUI toolkit (only needed when GUI enabled)")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr"},"protobuf"),(0,a.mdx)("td",{parentName:"tr"},"Payments in GUI"),(0,a.mdx)("td",{parentName:"tr"},"Data interchange format used for payment protocol (only needed when GUI enabled)")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr"},"libqrencode"),(0,a.mdx)("td",{parentName:"tr"},"QR codes in GUI"),(0,a.mdx)("td",{parentName:"tr"},"Optional for generating QR codes (only needed when GUI enabled)")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr"},"univalue"),(0,a.mdx)("td",{parentName:"tr"},"Utility"),(0,a.mdx)("td",{parentName:"tr"},"JSON parsing and encoding (bundled version will be used unless --with-system-univalue passed to configure)")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr"},"libzmq3"),(0,a.mdx)("td",{parentName:"tr"},"ZMQ notification"),(0,a.mdx)("td",{parentName:"tr"},"Optional, allows generating ZMQ notifications (requires ZMQ version >= 4.0.0)")))),(0,a.mdx)("p",null,"For the versions used, see ",(0,a.mdx)("a",{href:"dependencies.md",parentName:"p"},"dependencies.md")),(0,a.mdx)("h2",null,"Memory Requirements"),(0,a.mdx)("p",null,"C++ compilers are memory-hungry. It is recommended to have at least 1.5 GB of\r\nmemory available when compiling Wiocoin Core. On systems with less, gcc can be\r\ntuned to conserve memory with additional CXXFLAGS:"),(0,a.mdx)("p",null,'./configure CXXFLAGS="--param ggc-min-expand=1 --param ggc-min-heapsize=32768"'),(0,a.mdx)("h2",null,"Linux Distribution Specific Instructions"),(0,a.mdx)("h3",null,"Ubuntu & Debian"),(0,a.mdx)("h4",null,"Dependency Build Instructions"),(0,a.mdx)("p",null,"Build requirements:"),(0,a.mdx)("p",null,"sudo apt-get install build-essential libtool autotools-dev automake pkg-config bsdmainutils python3"),(0,a.mdx)("p",null,"Now, you can either build from self-compiled ",(0,a.mdx)("a",{href:"/depends/README.md",parentName:"p"},"depends")," or install the required dependencies:"),(0,a.mdx)("p",null,"sudo apt-get install libssl-dev libevent-dev libboost-system-dev libboost-filesystem-dev libboost-chrono-dev libboost-test-dev libboost-thread-dev"),(0,a.mdx)("p",null,"BerkeleyDB is required for the wallet."),(0,a.mdx)("p",null,"Ubuntu and Debian have their own libdb-dev and libdb++-dev packages, but these will install\r\nBerkeleyDB 5.1 or later. This will break binary wallet compatibility with the distributed executables, which\r\nare based on BerkeleyDB 4.8. If you do not care about wallet compatibility,\r\npass ",(0,a.mdx)("inlineCode",{parentName:"p"},"--with-incompatible-bdb")," to configure."),(0,a.mdx)("p",null,"Otherwise, you can build from self-compiled ",(0,a.mdx)("inlineCode",{parentName:"p"},"depends")," (see above)."),(0,a.mdx)("p",null,"To build Wiocoin Core without wallet, see ",(0,a.mdx)("a",{href:"/doc/build-unix.md#disable-wallet-mode",parentName:"p"},(0,a.mdx)("em",{parentName:"a"},"Disable-wallet mode"))),(0,a.mdx)("p",null,"Optional (see --with-miniupnpc and --enable-upnp-default):"),(0,a.mdx)("p",null,"sudo apt-get install libminiupnpc-dev"),(0,a.mdx)("p",null,"ZMQ dependencies (provides ZMQ API):"),(0,a.mdx)("p",null,"sudo apt-get install libzmq3-dev"),(0,a.mdx)("p",null,"GUI dependencies:"),(0,a.mdx)("p",null,"If you want to build wiocoin-qt, make sure that the required packages for Qt development\r\nare installed. Qt 5 is necessary to build the GUI.\r\nTo build without GUI pass ",(0,a.mdx)("inlineCode",{parentName:"p"},"--without-gui"),"."),(0,a.mdx)("p",null,"To build with Qt 5 you need the following:"),(0,a.mdx)("p",null,"sudo apt-get install libqt5gui5 libqt5core5a libqt5dbus5 qttools5-dev qttools5-dev-tools libprotobuf-dev protobuf-compiler"),(0,a.mdx)("p",null,"libqrencode (optional) can be installed with:"),(0,a.mdx)("p",null,"sudo apt-get install libqrencode-dev"),(0,a.mdx)("p",null,"Once these are installed, they will be found by configure and a wiocoin-qt executable will be\r\nbuilt by default."),(0,a.mdx)("h3",null,"Fedora"),(0,a.mdx)("h4",null,"Dependency Build Instructions"),(0,a.mdx)("p",null,"Build requirements:"),(0,a.mdx)("p",null,"sudo dnf install gcc-c++ libtool make autoconf automake openssl-devel libevent-devel boost-devel libdb4-devel libdb4-cxx-devel python3"),(0,a.mdx)("p",null,"Optional:"),(0,a.mdx)("p",null,"sudo dnf install miniupnpc-devel"),(0,a.mdx)("p",null,"To build with Qt 5 you need the following:"),(0,a.mdx)("p",null,"sudo dnf install qt5-qttools-devel qt5-qtbase-devel protobuf-devel"),(0,a.mdx)("p",null,"libqrencode (optional) can be installed with:"),(0,a.mdx)("p",null,"sudo dnf install qrencode-devel"),(0,a.mdx)("h2",null,"Notes"),(0,a.mdx)("p",null,'The release is built with GCC and then "strip wiocoind" to strip the debug\r\nsymbols, which reduces the executable size by about 90%.'),(0,a.mdx)("h2",null,"miniupnpc"),(0,a.mdx)("p",null,(0,a.mdx)("a",{href:"http://miniupnp.free.fr/",parentName:"p"},"miniupnpc")," may be used for UPnP port mapping. It can be downloaded from ",(0,a.mdx)("a",{href:"http://miniupnp.tuxfamily.org/files/",parentName:"p"},"here"),". UPnP support is compiled in and\r\nturned off by default. See the configure options for upnp behavior desired:"),(0,a.mdx)("p",null,"--without-miniupnpc No UPnP support miniupnp not required\r\n--disable-upnp-default (the default) UPnP support turned off by default at runtime\r\n--enable-upnp-default UPnP support turned on by default at runtime"),(0,a.mdx)("h2",null,"Berkeley DB"),(0,a.mdx)("p",null,"It is recommended to use Berkeley DB 4.8. If you have to build it yourself,\r\nyou can use ",(0,a.mdx)("a",{href:"/contrib/install_db4.sh",parentName:"p"},"the installation script included in contrib/"),"\r\nlike so:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{className:"language-shell",parentName:"pre"},"./contrib/install_db4.sh `pwd`\n")),(0,a.mdx)("p",null,"from the root of the repository."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Note"),": You only need Berkeley DB if the wallet is enabled (see ",(0,a.mdx)("a",{href:"/doc/build-unix.md#disable-wallet-mode",parentName:"p"},(0,a.mdx)("em",{parentName:"a"},"Disable-wallet mode")),")."),(0,a.mdx)("h2",null,"Boost"),(0,a.mdx)("p",null,"If you need to build Boost yourself:"),(0,a.mdx)("p",null,"sudo su\r\n./bootstrap.sh\r\n./bjam install"),(0,a.mdx)("h2",null,"Security"),(0,a.mdx)("p",null,"To help make your Wiocoin Core installation more secure by making certain attacks impossible to\r\nexploit even if a vulnerability is found, binaries are hardened by default.\r\nThis can be disabled with:"),(0,a.mdx)("p",null,"Hardening Flags:"),(0,a.mdx)("p",null,"./configure --enable-hardening\r\n./configure --disable-hardening"),(0,a.mdx)("p",null,"Hardening enables the following features:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("em",{parentName:"p"},"Position Independent Executable"),": Build position independent code to take advantage of Address Space Layout Randomization\r\noffered by some kernels. Attackers who can cause execution of code at an arbitrary memory\r\nlocation are thwarted if they don't know where anything useful is located.\r\nThe stack and heap are randomly located by default, but this allows the code section to be\r\nrandomly located as well."),(0,a.mdx)("p",{parentName:"li"},'On an AMD64 processor where a library was not compiled with -fPIC, this will cause an error\r\nsuch as: "relocation R_X86_64_32 against `......\' can not be used when making a shared object;"'),(0,a.mdx)("p",{parentName:"li"},"To test that you have built PIE executable, install scanelf, part of paxutils, and use:"),(0,a.mdx)("p",{parentName:"li"},"scanelf -e ./wiocoin"),(0,a.mdx)("p",{parentName:"li"},"The output should contain:"),(0,a.mdx)("p",{parentName:"li"},"TYPE\r\nET_DYN")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("em",{parentName:"p"},"Non-executable Stack"),": If the stack is executable then trivial stack-based buffer overflow exploits are possible if\r\nvulnerable buffers are found. By default, Wiocoin Core should be built with a non-executable stack,\r\nbut if one of the libraries it uses asks for an executable stack or someone makes a mistake\r\nand uses a compiler extension which requires an executable stack, it will silently build an\r\nexecutable without the non-executable stack protection."),(0,a.mdx)("p",{parentName:"li"},"To verify that the stack is non-executable after compiling use:\r\n",(0,a.mdx)("inlineCode",{parentName:"p"},"scanelf -e ./wiocoin")),(0,a.mdx)("p",{parentName:"li"},"The output should contain:\r\nSTK/REL/PTL\r\nRW- R-- RW-"),(0,a.mdx)("p",{parentName:"li"},"The STK RW- means that the stack is readable and writeable but not executable."))),(0,a.mdx)("h2",null,"Disable-wallet mode"),(0,a.mdx)("p",null,"When the intention is to run only a P2P node without a wallet, Wiocoin Core may be compiled in\r\ndisable-wallet mode with:"),(0,a.mdx)("p",null,"./configure --disable-wallet"),(0,a.mdx)("p",null,"In this case there is no dependency on Berkeley DB 4.8."),(0,a.mdx)("p",null,"Mining is also possible in disable-wallet mode using the ",(0,a.mdx)("inlineCode",{parentName:"p"},"getblocktemplate")," RPC call."),(0,a.mdx)("h2",null,"Additional Configure Flags"),(0,a.mdx)("p",null,"A list of additional configure flags can be displayed with:"),(0,a.mdx)("p",null,"./configure --help"),(0,a.mdx)("h2",null,"Setup and Build Example: Arch Linux"),(0,a.mdx)("p",null,"This example lists the steps necessary to setup and build a command line only, non-wallet distribution of the latest changes on Arch Linux:"),(0,a.mdx)("p",null,"pacman -S git base-devel boost libevent python\r\ngit clone ",(0,a.mdx)("a",{href:"https://github.com/wiocoin-project/wiocoin.git",parentName:"p"},"https://github.com/wiocoin-project/wiocoin.git"),"\r\ncd wiocoin/\r\n./autogen.sh\r\n./configure --disable-wallet --without-gui --without-miniupnpc\r\nmake check"),(0,a.mdx)("p",null,"Note:\r\nEnabling wallet support requires either compiling against a Berkeley DB newer than 4.8 (package ",(0,a.mdx)("inlineCode",{parentName:"p"},"db"),") using ",(0,a.mdx)("inlineCode",{parentName:"p"},"--with-incompatible-bdb"),",\r\nor building and depending on a local version of Berkeley DB 4.8. The readily available Arch Linux packages are currently built using\r\n",(0,a.mdx)("inlineCode",{parentName:"p"},"--with-incompatible-bdb")," according to the ",(0,a.mdx)("a",{href:"https://projects.archlinux.org/svntogit/community.git/tree/bitcoin/trunk/PKGBUILD",parentName:"p"},"PKGBUILD"),".\r\nAs mentioned above, when maintaining portability of the wallet between the standard Wiocoin Core distributions and independently built\r\nnode software is desired, Berkeley DB 4.8 must be used."),(0,a.mdx)("h2",null,"ARM Cross-compilation"),(0,a.mdx)("p",null,"These steps can be performed on, for example, an Ubuntu VM. The depends system\r\nwill also work on other Linux distributions, however the commands for\r\ninstalling the toolchain will be different."),(0,a.mdx)("p",null,"Make sure you install the build requirements mentioned above.\r\nThen, install the toolchain and curl:"),(0,a.mdx)("p",null,"sudo apt-get install g++-arm-linux-gnueabihf curl"),(0,a.mdx)("p",null,"To build executables for ARM:"),(0,a.mdx)("p",null,"cd depends\r\nmake HOST=arm-linux-gnueabihf NO_QT=1\r\ncd ..\r\n./autogen.sh\r\n./configure --prefix=$PWD/depends/arm-linux-gnueabihf --enable-glibc-back-compat --enable-reduce-exports LDFLAGS=-static-libstdc++\r\nmake"),(0,a.mdx)("p",null,"For further documentation on the depends system see ",(0,a.mdx)("a",{href:"../depends/README.md",parentName:"p"},"README.md")," in the depends directory."))}m.isMDXComponent=!0,n.default=m}},function(e){e.O(0,[511,774,888,179],(function(){return n=9865,e(e.s=n);var n}));var n=e.O();_N_E=n}]);