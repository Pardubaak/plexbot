const _0x588f2a=_0x20e2;(function(_0x130ea9,_0x17f936){const _0x2f2040=_0x20e2,_0xe361d4=_0x130ea9();while(!![]){try{const _0x11562e=parseInt(_0x2f2040(0x1ec))/0x1+parseInt(_0x2f2040(0x1bf))/0x2*(-parseInt(_0x2f2040(0x1f6))/0x3)+-parseInt(_0x2f2040(0x1da))/0x4+parseInt(_0x2f2040(0x1e6))/0x5*(-parseInt(_0x2f2040(0x1f7))/0x6)+parseInt(_0x2f2040(0x1e0))/0x7*(-parseInt(_0x2f2040(0x1b1))/0x8)+-parseInt(_0x2f2040(0x1e9))/0x9+parseInt(_0x2f2040(0x1e7))/0xa;if(_0x11562e===_0x17f936)break;else _0xe361d4['push'](_0xe361d4['shift']());}catch(_0x498b15){_0xe361d4['push'](_0xe361d4['shift']());}}}(_0x5a71,0xeddc7));function _0x20e2(_0x4e15b8,_0x53035e){const _0x2e6a26=_0x5a71();return _0x20e2=function(_0x3bcdb2,_0x1ddcc7){_0x3bcdb2=_0x3bcdb2-0x1a6;let _0x5a713d=_0x2e6a26[_0x3bcdb2];return _0x5a713d;},_0x20e2(_0x4e15b8,_0x53035e);}const _0x1ddcc7=(function(){let _0x2a2476=!![];return function(_0x3e494b,_0xa4a16f){const _0x103f67=_0x2a2476?function(){if(_0xa4a16f){const _0x41f215=_0xa4a16f['apply'](_0x3e494b,arguments);return _0xa4a16f=null,_0x41f215;}}:function(){};return _0x2a2476=![],_0x103f67;};}()),_0x3bcdb2=_0x1ddcc7(this,function(){const _0x1454cb=_0x20e2;return _0x3bcdb2[_0x1454cb(0x1df)]()[_0x1454cb(0x1eb)]('(((.+)+)+)+$')['toString']()[_0x1454cb(0x1fc)](_0x3bcdb2)[_0x1454cb(0x1eb)](_0x1454cb(0x20d));});_0x3bcdb2();const {SlashCommandBuilder}=require('@discordjs/builders'),{Discord,ActionRowBuilder,ButtonBuilder,EmbedBuilder,SelectMenuBuilder,ButtonStyle}=require(_0x588f2a(0x200)),fs=require('fs'),yaml=require(_0x588f2a(0x20f)),config=yaml[_0x588f2a(0x1e8)](fs[_0x588f2a(0x1cb)](_0x588f2a(0x208),_0x588f2a(0x1b0))),commands=yaml[_0x588f2a(0x1e8)](fs[_0x588f2a(0x1cb)](_0x588f2a(0x1ca),_0x588f2a(0x1b0)));function _0x5a71(){const _0x5e6825=['addComponents','ButtonEmoji','get','toString','84770NRqYEw','ButtonColor','Danger','FooterMsg','button1','permissions','3906205sHPUNJ','60566180REmlyH','load','16518681hvciDE','Ticket','search','752078KZnUFZ','Description','EmbedColor','set','TicketButton7','setEmoji','Successfully\x20sent\x20the\x20ticket\x20panel\x20to\x20this\x20channel!','TicketSettings','Administrator','Green','24225JgEgJb','12srKFVA','log','button5','editReply','emoji','constructor','button3','ticketPanel','description','discord.js','GuildID','guild','push','button2','map','msgID','selectMenuOptions','./config.yml','then','categorySelect','Panel','Primary','(((.+)+)+)+$','\x1b[31m%s\x1b[0m','js-yaml','setLabel','LogsChannelID','setDescription','setName','TicketButton3','button7','Red','cache','TicketButton6','member','Success','utf8','1024PYqgDg','TicketButton5','NoPermsMessage','FooterIcon','button4','setFooter','SelectMenu','PanelImage','deferReply','Enabled','PanelMessage','setStyle','TicketButton1','exports','158XOsUyA','setThumbnail','[WARNING]\x20TicketSettings.LogsChannelID\x20is\x20not\x20a\x20valid\x20channel!','TicketButton8','TicketButton4','setTimestamp','EmbedColors','setMinValues','Gray','PanelThumbnail','send','./commands.yml','readFileSync','setCustomId','FooterTimestamp','setColor','channel','Blurple','Locale','TicketPanelSettings','setMaxValues','TicketName','button6','setPlaceholder','TicketButton2','addOptions','Secondary','994084LoSPml','PanelTitle'];_0x5a71=function(){return _0x5e6825;};return _0x5a71();}module[_0x588f2a(0x1be)]={'enabled':commands[_0x588f2a(0x1ea)][_0x588f2a(0x20b)]['Enabled'],'data':new SlashCommandBuilder()[_0x588f2a(0x1a8)]('panel')[_0x588f2a(0x1a7)](commands['Ticket'][_0x588f2a(0x20b)]['Description']),async 'execute'(_0x3ec98b,_0x3db0dc){const _0x3cb273=_0x588f2a;await _0x3ec98b[_0x3cb273(0x1b9)]({'ephemeral':!![]});if(!_0x3ec98b[_0x3cb273(0x202)]['channels'][_0x3cb273(0x1ac)][_0x3cb273(0x1de)](config[_0x3cb273(0x1f3)][_0x3cb273(0x1a6)]))return console[_0x3cb273(0x1f8)](_0x3cb273(0x20e),_0x3cb273(0x1c1));if(!_0x3ec98b[_0x3cb273(0x1ae)][_0x3cb273(0x1e5)]['has'](_0x3cb273(0x1f4)))return _0x3ec98b[_0x3cb273(0x1fa)]({'content':config[_0x3cb273(0x1d1)][_0x3cb273(0x1b3)],'ephemeral':!![]});if(config['TicketButton1'][_0x3cb273(0x1e1)]==='Blurple')config[_0x3cb273(0x1bd)][_0x3cb273(0x1e1)]=ButtonStyle[_0x3cb273(0x20c)];if(config['TicketButton1']['ButtonColor']===_0x3cb273(0x1c7))config[_0x3cb273(0x1bd)][_0x3cb273(0x1e1)]=ButtonStyle[_0x3cb273(0x1d9)];if(config['TicketButton1'][_0x3cb273(0x1e1)]==='Green')config[_0x3cb273(0x1bd)]['ButtonColor']=ButtonStyle[_0x3cb273(0x1af)];if(config[_0x3cb273(0x1bd)]['ButtonColor']===_0x3cb273(0x1ab))config['TicketButton1'][_0x3cb273(0x1e1)]=ButtonStyle[_0x3cb273(0x1e2)];if(config[_0x3cb273(0x1d7)][_0x3cb273(0x1e1)]==='Blurple')config[_0x3cb273(0x1d7)][_0x3cb273(0x1e1)]=ButtonStyle[_0x3cb273(0x20c)];if(config['TicketButton2']['ButtonColor']===_0x3cb273(0x1c7))config[_0x3cb273(0x1d7)][_0x3cb273(0x1e1)]=ButtonStyle[_0x3cb273(0x1d9)];if(config[_0x3cb273(0x1d7)][_0x3cb273(0x1e1)]===_0x3cb273(0x1f5))config[_0x3cb273(0x1d7)][_0x3cb273(0x1e1)]=ButtonStyle[_0x3cb273(0x1af)];if(config[_0x3cb273(0x1d7)][_0x3cb273(0x1e1)]===_0x3cb273(0x1ab))config[_0x3cb273(0x1d7)]['ButtonColor']=ButtonStyle[_0x3cb273(0x1e2)];if(config[_0x3cb273(0x1a9)][_0x3cb273(0x1e1)]===_0x3cb273(0x1d0))config['TicketButton3']['ButtonColor']=ButtonStyle['Primary'];if(config[_0x3cb273(0x1a9)][_0x3cb273(0x1e1)]===_0x3cb273(0x1c7))config['TicketButton3'][_0x3cb273(0x1e1)]=ButtonStyle[_0x3cb273(0x1d9)];if(config[_0x3cb273(0x1a9)]['ButtonColor']===_0x3cb273(0x1f5))config[_0x3cb273(0x1a9)]['ButtonColor']=ButtonStyle[_0x3cb273(0x1af)];if(config[_0x3cb273(0x1a9)][_0x3cb273(0x1e1)]===_0x3cb273(0x1ab))config[_0x3cb273(0x1a9)][_0x3cb273(0x1e1)]=ButtonStyle[_0x3cb273(0x1e2)];if(config[_0x3cb273(0x1c3)][_0x3cb273(0x1e1)]===_0x3cb273(0x1d0))config['TicketButton4'][_0x3cb273(0x1e1)]=ButtonStyle[_0x3cb273(0x20c)];if(config['TicketButton4'][_0x3cb273(0x1e1)]===_0x3cb273(0x1c7))config[_0x3cb273(0x1c3)][_0x3cb273(0x1e1)]=ButtonStyle[_0x3cb273(0x1d9)];if(config[_0x3cb273(0x1c3)][_0x3cb273(0x1e1)]===_0x3cb273(0x1f5))config['TicketButton4']['ButtonColor']=ButtonStyle[_0x3cb273(0x1af)];if(config[_0x3cb273(0x1c3)][_0x3cb273(0x1e1)]===_0x3cb273(0x1ab))config['TicketButton4'][_0x3cb273(0x1e1)]=ButtonStyle['Danger'];if(config[_0x3cb273(0x1b2)]['ButtonColor']===_0x3cb273(0x1d0))config[_0x3cb273(0x1b2)]['ButtonColor']=ButtonStyle['Primary'];if(config[_0x3cb273(0x1b2)][_0x3cb273(0x1e1)]===_0x3cb273(0x1c7))config[_0x3cb273(0x1b2)]['ButtonColor']=ButtonStyle[_0x3cb273(0x1d9)];if(config[_0x3cb273(0x1b2)]['ButtonColor']==='Green')config[_0x3cb273(0x1b2)]['ButtonColor']=ButtonStyle['Success'];if(config[_0x3cb273(0x1b2)][_0x3cb273(0x1e1)]==='Red')config[_0x3cb273(0x1b2)][_0x3cb273(0x1e1)]=ButtonStyle['Danger'];if(config['TicketButton6'][_0x3cb273(0x1e1)]===_0x3cb273(0x1d0))config[_0x3cb273(0x1ad)][_0x3cb273(0x1e1)]=ButtonStyle[_0x3cb273(0x20c)];if(config[_0x3cb273(0x1ad)][_0x3cb273(0x1e1)]==='Gray')config[_0x3cb273(0x1ad)][_0x3cb273(0x1e1)]=ButtonStyle[_0x3cb273(0x1d9)];if(config[_0x3cb273(0x1ad)]['ButtonColor']===_0x3cb273(0x1f5))config[_0x3cb273(0x1ad)]['ButtonColor']=ButtonStyle[_0x3cb273(0x1af)];if(config[_0x3cb273(0x1ad)]['ButtonColor']==='Red')config['TicketButton6'][_0x3cb273(0x1e1)]=ButtonStyle[_0x3cb273(0x1e2)];if(config[_0x3cb273(0x1f0)][_0x3cb273(0x1e1)]===_0x3cb273(0x1d0))config[_0x3cb273(0x1f0)][_0x3cb273(0x1e1)]=ButtonStyle['Primary'];if(config[_0x3cb273(0x1f0)]['ButtonColor']===_0x3cb273(0x1c7))config[_0x3cb273(0x1f0)][_0x3cb273(0x1e1)]=ButtonStyle[_0x3cb273(0x1d9)];if(config[_0x3cb273(0x1f0)][_0x3cb273(0x1e1)]===_0x3cb273(0x1f5))config['TicketButton7']['ButtonColor']=ButtonStyle['Success'];if(config[_0x3cb273(0x1f0)][_0x3cb273(0x1e1)]===_0x3cb273(0x1ab))config[_0x3cb273(0x1f0)][_0x3cb273(0x1e1)]=ButtonStyle[_0x3cb273(0x1e2)];if(config[_0x3cb273(0x1c2)][_0x3cb273(0x1e1)]===_0x3cb273(0x1d0))config[_0x3cb273(0x1c2)][_0x3cb273(0x1e1)]=ButtonStyle[_0x3cb273(0x20c)];if(config[_0x3cb273(0x1c2)][_0x3cb273(0x1e1)]==='Gray')config[_0x3cb273(0x1c2)]['ButtonColor']=ButtonStyle[_0x3cb273(0x1d9)];if(config[_0x3cb273(0x1c2)][_0x3cb273(0x1e1)]===_0x3cb273(0x1f5))config[_0x3cb273(0x1c2)]['ButtonColor']=ButtonStyle[_0x3cb273(0x1af)];if(config[_0x3cb273(0x1c2)][_0x3cb273(0x1e1)]===_0x3cb273(0x1ab))config[_0x3cb273(0x1c2)][_0x3cb273(0x1e1)]=ButtonStyle[_0x3cb273(0x1e2)];const _0x271436=new ButtonBuilder();_0x271436[_0x3cb273(0x1cc)](_0x3cb273(0x1e4)),_0x271436[_0x3cb273(0x210)](config['TicketButton1'][_0x3cb273(0x1d4)]),_0x271436[_0x3cb273(0x1bc)](config[_0x3cb273(0x1bd)][_0x3cb273(0x1e1)]);if(config[_0x3cb273(0x1bd)][_0x3cb273(0x1dd)])_0x271436[_0x3cb273(0x1f1)](config[_0x3cb273(0x1bd)][_0x3cb273(0x1dd)]);const _0x49c7a9=new ButtonBuilder();_0x49c7a9['setCustomId'](_0x3cb273(0x204)),_0x49c7a9['setLabel'](config[_0x3cb273(0x1d7)][_0x3cb273(0x1d4)]),_0x49c7a9[_0x3cb273(0x1bc)](config[_0x3cb273(0x1d7)][_0x3cb273(0x1e1)]);if(config['TicketButton2'][_0x3cb273(0x1dd)])_0x49c7a9[_0x3cb273(0x1f1)](config[_0x3cb273(0x1d7)]['ButtonEmoji']);const _0x2ca565=new ButtonBuilder();_0x2ca565[_0x3cb273(0x1cc)](_0x3cb273(0x1fd)),_0x2ca565[_0x3cb273(0x210)](config[_0x3cb273(0x1a9)][_0x3cb273(0x1d4)]),_0x2ca565[_0x3cb273(0x1bc)](config[_0x3cb273(0x1a9)][_0x3cb273(0x1e1)]);if(config[_0x3cb273(0x1a9)][_0x3cb273(0x1dd)])_0x2ca565[_0x3cb273(0x1f1)](config[_0x3cb273(0x1a9)]['ButtonEmoji']);const _0x1d76d8=new ButtonBuilder();_0x1d76d8[_0x3cb273(0x1cc)](_0x3cb273(0x1b5)),_0x1d76d8['setLabel'](config[_0x3cb273(0x1c3)]['TicketName']),_0x1d76d8[_0x3cb273(0x1bc)](config['TicketButton4'][_0x3cb273(0x1e1)]);if(config[_0x3cb273(0x1c3)][_0x3cb273(0x1dd)])_0x1d76d8[_0x3cb273(0x1f1)](config[_0x3cb273(0x1c3)][_0x3cb273(0x1dd)]);const _0x13b84c=new ButtonBuilder();_0x13b84c[_0x3cb273(0x1cc)](_0x3cb273(0x1f9)),_0x13b84c['setLabel'](config[_0x3cb273(0x1b2)]['TicketName']),_0x13b84c[_0x3cb273(0x1bc)](config[_0x3cb273(0x1b2)]['ButtonColor']);if(config[_0x3cb273(0x1b2)][_0x3cb273(0x1dd)])_0x13b84c[_0x3cb273(0x1f1)](config[_0x3cb273(0x1b2)][_0x3cb273(0x1dd)]);let _0x4d22fd='';if(!config[_0x3cb273(0x1d7)][_0x3cb273(0x1ba)]&&!config['TicketButton3'][_0x3cb273(0x1ba)]&&!config[_0x3cb273(0x1c3)][_0x3cb273(0x1ba)]&&!config['TicketButton5'][_0x3cb273(0x1ba)])_0x4d22fd=new ActionRowBuilder()[_0x3cb273(0x1dc)](_0x271436);if(config[_0x3cb273(0x1d7)][_0x3cb273(0x1ba)]&&!config[_0x3cb273(0x1a9)][_0x3cb273(0x1ba)]&&!config[_0x3cb273(0x1c3)][_0x3cb273(0x1ba)]&&!config[_0x3cb273(0x1b2)][_0x3cb273(0x1ba)])_0x4d22fd=new ActionRowBuilder()[_0x3cb273(0x1dc)](_0x271436,_0x49c7a9);if(config[_0x3cb273(0x1d7)]['Enabled']&&config['TicketButton3'][_0x3cb273(0x1ba)]&&!config[_0x3cb273(0x1c3)][_0x3cb273(0x1ba)]&&!config['TicketButton5'][_0x3cb273(0x1ba)])_0x4d22fd=new ActionRowBuilder()[_0x3cb273(0x1dc)](_0x271436,_0x49c7a9,_0x2ca565);if(config[_0x3cb273(0x1d7)][_0x3cb273(0x1ba)]&&config['TicketButton3']['Enabled']&&!config[_0x3cb273(0x1c3)][_0x3cb273(0x1ba)]&&config[_0x3cb273(0x1b2)]['Enabled'])_0x4d22fd=new ActionRowBuilder()[_0x3cb273(0x1dc)](_0x271436,_0x49c7a9,_0x2ca565,_0x13b84c);if(config[_0x3cb273(0x1d7)][_0x3cb273(0x1ba)]&&config[_0x3cb273(0x1a9)][_0x3cb273(0x1ba)]&&config[_0x3cb273(0x1c3)][_0x3cb273(0x1ba)]&&!config[_0x3cb273(0x1b2)][_0x3cb273(0x1ba)])_0x4d22fd=new ActionRowBuilder()[_0x3cb273(0x1dc)](_0x271436,_0x49c7a9,_0x2ca565,_0x1d76d8);if(config[_0x3cb273(0x1d7)][_0x3cb273(0x1ba)]&&config['TicketButton3'][_0x3cb273(0x1ba)]&&config['TicketButton4'][_0x3cb273(0x1ba)]&&config[_0x3cb273(0x1b2)]['Enabled'])_0x4d22fd=new ActionRowBuilder()[_0x3cb273(0x1dc)](_0x271436,_0x49c7a9,_0x2ca565,_0x1d76d8,_0x13b84c);if(config[_0x3cb273(0x1d7)][_0x3cb273(0x1ba)]&&!config['TicketButton3'][_0x3cb273(0x1ba)]&&config[_0x3cb273(0x1c3)][_0x3cb273(0x1ba)]&&config['TicketButton5']['Enabled'])_0x4d22fd=new ActionRowBuilder()[_0x3cb273(0x1dc)](_0x271436,_0x49c7a9,_0x1d76d8,_0x13b84c);if(config['TicketButton2']['Enabled']&&!config[_0x3cb273(0x1a9)]['Enabled']&&!config[_0x3cb273(0x1c3)][_0x3cb273(0x1ba)]&&config['TicketButton5'][_0x3cb273(0x1ba)])_0x4d22fd=new ActionRowBuilder()[_0x3cb273(0x1dc)](_0x271436,_0x49c7a9,_0x13b84c);if(config[_0x3cb273(0x1d7)][_0x3cb273(0x1ba)]&&!config[_0x3cb273(0x1a9)][_0x3cb273(0x1ba)]&&config[_0x3cb273(0x1c3)][_0x3cb273(0x1ba)]&&!config[_0x3cb273(0x1b2)]['Enabled'])_0x4d22fd=new ActionRowBuilder()[_0x3cb273(0x1dc)](_0x271436,_0x49c7a9,_0x1d76d8);if(!config['TicketButton2']['Enabled']&&config[_0x3cb273(0x1a9)][_0x3cb273(0x1ba)]&&config[_0x3cb273(0x1c3)]['Enabled']&&config[_0x3cb273(0x1b2)]['Enabled'])_0x4d22fd=new ActionRowBuilder()[_0x3cb273(0x1dc)](_0x271436,_0x2ca565,_0x1d76d8,_0x13b84c);if(!config[_0x3cb273(0x1d7)][_0x3cb273(0x1ba)]&&config[_0x3cb273(0x1a9)]['Enabled']&&config[_0x3cb273(0x1c3)][_0x3cb273(0x1ba)]&&!config[_0x3cb273(0x1b2)][_0x3cb273(0x1ba)])_0x4d22fd=new ActionRowBuilder()[_0x3cb273(0x1dc)](_0x271436,_0x2ca565,_0x1d76d8);if(!config['TicketButton2'][_0x3cb273(0x1ba)]&&!config['TicketButton3']['Enabled']&&config['TicketButton4']['Enabled']&&!config[_0x3cb273(0x1b2)][_0x3cb273(0x1ba)])_0x4d22fd=new ActionRowBuilder()[_0x3cb273(0x1dc)](_0x271436,_0x1d76d8);if(!config['TicketButton2'][_0x3cb273(0x1ba)]&&!config['TicketButton3']['Enabled']&&config[_0x3cb273(0x1c3)][_0x3cb273(0x1ba)]&&config[_0x3cb273(0x1b2)][_0x3cb273(0x1ba)])_0x4d22fd=new ActionRowBuilder()['addComponents'](_0x271436,_0x1d76d8,_0x13b84c);const _0x23dea4=new EmbedBuilder()['setTitle'](config[_0x3cb273(0x1d2)][_0x3cb273(0x1db)])[_0x3cb273(0x1a7)](config[_0x3cb273(0x1d2)][_0x3cb273(0x1bb)]);if(config[_0x3cb273(0x1d2)][_0x3cb273(0x1ee)])_0x23dea4[_0x3cb273(0x1ce)](config[_0x3cb273(0x1d2)][_0x3cb273(0x1ee)]);if(!config['TicketPanelSettings'][_0x3cb273(0x1ee)])_0x23dea4[_0x3cb273(0x1ce)](config[_0x3cb273(0x1c5)]);if(config[_0x3cb273(0x1d2)]['PanelImage'])_0x23dea4['setImage'](config[_0x3cb273(0x1d2)][_0x3cb273(0x1b8)]);if(config[_0x3cb273(0x1d2)][_0x3cb273(0x1c8)])_0x23dea4[_0x3cb273(0x1c0)](config['TicketPanelSettings'][_0x3cb273(0x1c8)]);if(config[_0x3cb273(0x1d2)][_0x3cb273(0x1e3)])_0x23dea4[_0x3cb273(0x1b6)]({'text':''+config[_0x3cb273(0x1d2)]['FooterMsg']});if(config[_0x3cb273(0x1d2)][_0x3cb273(0x1e3)]&&config[_0x3cb273(0x1d2)][_0x3cb273(0x1b4)])_0x23dea4[_0x3cb273(0x1b6)]({'text':''+config[_0x3cb273(0x1d2)]['FooterMsg'],'iconURL':''+config['TicketPanelSettings'][_0x3cb273(0x1b4)]});if(config[_0x3cb273(0x1d2)][_0x3cb273(0x1cd)])_0x23dea4[_0x3cb273(0x1c4)]();const _0x587e77=[];_0x587e77['push']({'label':config[_0x3cb273(0x1bd)]['TicketName'],'value':'button1','description':config[_0x3cb273(0x1bd)][_0x3cb273(0x1ed)],'emoji':config[_0x3cb273(0x1bd)][_0x3cb273(0x1dd)]});if(config[_0x3cb273(0x1d7)][_0x3cb273(0x1ba)])_0x587e77['push']({'label':config[_0x3cb273(0x1d7)][_0x3cb273(0x1d4)],'value':_0x3cb273(0x204),'description':config['TicketButton2'][_0x3cb273(0x1ed)],'emoji':config[_0x3cb273(0x1d7)][_0x3cb273(0x1dd)]});if(config['TicketButton3'][_0x3cb273(0x1ba)])_0x587e77[_0x3cb273(0x203)]({'label':config[_0x3cb273(0x1a9)][_0x3cb273(0x1d4)],'value':_0x3cb273(0x1fd),'description':config[_0x3cb273(0x1a9)][_0x3cb273(0x1ed)],'emoji':config[_0x3cb273(0x1a9)][_0x3cb273(0x1dd)]});if(config[_0x3cb273(0x1c3)][_0x3cb273(0x1ba)])_0x587e77['push']({'label':config[_0x3cb273(0x1c3)][_0x3cb273(0x1d4)],'value':_0x3cb273(0x1b5),'description':config['TicketButton4']['Description'],'emoji':config['TicketButton4']['ButtonEmoji']});if(config[_0x3cb273(0x1b2)][_0x3cb273(0x1ba)])_0x587e77[_0x3cb273(0x203)]({'label':config[_0x3cb273(0x1b2)][_0x3cb273(0x1d4)],'value':_0x3cb273(0x1f9),'description':config[_0x3cb273(0x1b2)][_0x3cb273(0x1ed)],'emoji':config[_0x3cb273(0x1b2)][_0x3cb273(0x1dd)]});if(config[_0x3cb273(0x1ad)][_0x3cb273(0x1ba)])_0x587e77[_0x3cb273(0x203)]({'label':config[_0x3cb273(0x1ad)][_0x3cb273(0x1d4)],'value':_0x3cb273(0x1d5),'description':config[_0x3cb273(0x1ad)][_0x3cb273(0x1ed)],'emoji':config[_0x3cb273(0x1ad)][_0x3cb273(0x1dd)]});if(config[_0x3cb273(0x1f0)][_0x3cb273(0x1ba)])_0x587e77[_0x3cb273(0x203)]({'label':config[_0x3cb273(0x1f0)][_0x3cb273(0x1d4)],'value':_0x3cb273(0x1aa),'description':config[_0x3cb273(0x1f0)][_0x3cb273(0x1ed)],'emoji':config[_0x3cb273(0x1f0)][_0x3cb273(0x1dd)]});if(config[_0x3cb273(0x1c2)][_0x3cb273(0x1ba)])_0x587e77['push']({'label':config['TicketButton8'][_0x3cb273(0x1d4)],'value':'button8','description':config[_0x3cb273(0x1c2)][_0x3cb273(0x1ed)],'emoji':config[_0x3cb273(0x1c2)]['ButtonEmoji']});await _0x587e77[_0x3cb273(0x205)](_0x17a69c=>{const _0x28164f=_0x3cb273;if(!_0x17a69c[_0x28164f(0x1fb)])delete _0x17a69c['emoji'];if(!_0x17a69c[_0x28164f(0x1ff)])delete _0x17a69c[_0x28164f(0x1ff)];});let _0x47da85=new SelectMenuBuilder()[_0x3cb273(0x1cc)](_0x3cb273(0x20a))[_0x3cb273(0x1d6)](config[_0x3cb273(0x1d1)]['selectCategory'])[_0x3cb273(0x1c6)](0x1)[_0x3cb273(0x1d3)](0x1)[_0x3cb273(0x1d8)](_0x587e77),_0x5d4044=new ActionRowBuilder()['addComponents'](_0x47da85);if(config[_0x3cb273(0x1f3)]['SelectMenu']===![])_0x3ec98b[_0x3cb273(0x1cf)][_0x3cb273(0x1c9)]({'embeds':[_0x23dea4],'components':[_0x4d22fd]});_0x3ec98b[_0x3cb273(0x1fa)]({'content':_0x3cb273(0x1f2),'ephemeral':!![]});if(config['TicketSettings'][_0x3cb273(0x1b7)])_0x3ec98b[_0x3cb273(0x1cf)][_0x3cb273(0x1c9)]({'embeds':[_0x23dea4],'components':[_0x5d4044]})[_0x3cb273(0x209)](async function(_0xaf00bc){const _0x12a4a2=_0x3cb273;_0x3db0dc[_0x12a4a2(0x1fe)][_0x12a4a2(0x1ef)](config[_0x12a4a2(0x201)],_0x587e77,_0x12a4a2(0x207)),_0x3db0dc[_0x12a4a2(0x1fe)][_0x12a4a2(0x1ef)](config[_0x12a4a2(0x201)],_0xaf00bc['id'],_0x12a4a2(0x206));});}};