// ----------------------------------------------------------------------------
// markItUp!
// ----------------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------
myMarkdownSettings = {
	nameSpace:  'markdown', // Useful to prevent multi-instances CSS conflict
	onShiftEnter: {keepDefault:false, openWith:'\n\n'},
	markupSet: [
		{name:'Heading 1', key:'1', openWith:'#'      , placeHolder:' Your title here...' },
		{name:'Heading 2', key:'2', openWith:'##'     , placeHolder:' Your title here...' },
		{name:'Heading 3', key:"3", openWith:'### '   , placeHolder:' Your title here...' },
		{name:'Heading 4', key:"4", openWith:'#### '  , placeHolder:' Your title here...' },
		{name:'Heading 5', key:"5", openWith:'##### ' , placeHolder:' Your title here...' },
		{name:'Heading 6', key:"6", openWith:'###### ', placeHolder:' Your title here...' },
		{separator:'---------------' },
		{name:'Bold', key:"B", openWith:'**', closeWith:'**'},
		{name:'Italic', key:"I", openWith:'_', closeWith:'_'},
		{separator:'---------------' },
		{name:'Bulleted List', openWith:'- ' },
		{name:'Numeric List', openWith:function(markItUp) {
			return markItUp.line+'. ';
		}},
		{separator:'---------------' },
		{name:'Picture', key:"P", replaceWith:'![[![Alternative text]!]]([![Url:!:http://]!] "[![Title]!]")'},
		{name:'Link', key:"L", openWith:'[', closeWith:']([![Url:!:http://]!] "[![Title]!]")', placeHolder:'Your text to link here...' },
		{separator:'---------------'},
		{name:'Quotes', openWith:'> '},
		{name:'Code Block / Code', openWith:'(!(\t|!|`)!)', closeWith:'(!(`)!)'},
		{separator:'---------------'},
		{name:'Preview', call:'preview', className:"preview"}
	]
}
