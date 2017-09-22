var scoresArr = [
    { tagName: 'p', title: 'Scores Total', text: 'Scores Total' },
    { tagName: 'output', id: 'outputCorrAnswers', title: 'Correct Answer Total' },
    { tagName: 'output', id: 'outputIncorrAnswers', title: 'Correct Answer Total' }
];
var progBarArr = [
    { tagName: 'progress', id: 'progressBar', value: '0', max: '100' },
    { tagName: 'span', id: 'lblProgress', text: '0%' }
];
var tblArr = [
    [
        { tagName: 'div', 'class': 'column' },
        { tagName: 'div', 'class': 'column', text: 'Type' },
        { tagName: 'div', 'class': 'column', text: 'C# Alias' },
        { tagName: 'div', 'class': 'column', text: 'IL' },
        { tagName: 'div', 'class': 'column', text: 'SQL' },
        { tagName: 'div', 'class': 'column', text: 'Integral' },
        { tagName: 'div', 'class': 'column', text: 'Built In' },
        { tagName: 'div', 'class': 'column', text: 'Integrated' },
        { tagName: 'div', 'class': 'column', text: 'Nullable' },
        { tagName: 'div', 'class': 'column', text: 'Positive' },
        { tagName: 'div', 'class': 'column', text: 'Negative' },
        { tagName: 'div', 'class': 'column', text: 'Stack' },
        { tagName: 'div', 'class': 'column', text: 'Heap' },
        { tagName: 'div', 'class': 'column', text: 'Struct' }
    ],
    [
        { tagName: 'div', 'class': 'cell', text: '1' },
        { tagName: 'div', 'class': 'cell', text: 'Object' },
        { tagName: 'div', 'class': 'cell', text: 'object' },
        { tagName: 'div', 'class': 'cell', text: 'object' },
        { tagName: 'div', 'class': 'cell', text: 'sql_variant' },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isObjIntegral', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isObjBuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isObjIntegrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isObjNull', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isObjPos', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isObjNeg', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isObjStack', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isObjHeap', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isObjStruct', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        }

    ],
    [
        { tagName: 'div', 'class': 'cell', text: '2' },
        { tagName: 'div', 'class': 'cell', text: 'String' },
        { tagName: 'div', 'class': 'cell', text: 'string' },
        { tagName: 'div', 'class': 'cell', text: 'string' },
        { tagName: 'div', 'class': 'cell', text: 'char, nchar, varchar, nvarchar, text, ntext' },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isStrIntegral', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isStrBuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isStrIntegrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isStrNull', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isStrPos', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isStrNeg', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isStrStack', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isStrHeap', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isStrStruct', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        }
    ],
    [
        { tagName: 'div', 'class': 'cell', text: '3' },
        { tagName: 'div', 'class': 'cell', text: 'Void' },
        { tagName: 'div', 'class': 'cell', text: 'void' },
        { tagName: 'div', 'class': 'cell', text: 'void' },
        { tagName: 'div', 'class': 'cell', text: 'n/a' },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isVoidIntegral', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isVoidBuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isVoidIntegrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isVoidNull', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isVoidPos', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isVoidNeg', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isVoidStack', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isVoidHeap', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isVoidStruct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        }

    ],
    [
        { tagName: 'div', 'class': 'cell', text: '4' },
        { tagName: 'div', 'class': 'cell', text: 'Char' },
        { tagName: 'div', 'class': 'cell', text: 'char' },
        { tagName: 'div', 'class': 'cell', text: 'char' },
        { tagName: 'div', 'class': 'cell', text: 'n/a' },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isCharIntegral', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isCharBuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isCharIntegrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isCharNull', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isCharPos', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isCharNeg', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isCharStack', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isCharHeap', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isCharStruct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        }
    ],
    [
        { tagName: 'div', 'class': 'cell', text: '5' },
        { tagName: 'div', 'class': 'cell', text: 'Byte' },
        { tagName: 'div', 'class': 'cell', text: 'byte' },
        { tagName: 'div', 'class': 'cell', text: 'unsigned int8' },
        { tagName: 'div', 'class': 'cell', text: 'tinyint' },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isByteIntegral', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isByteBuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isByteIntegrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isByteNull', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isBytePos', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isByteNeg', value: '1', disabled: 'disabled' },
		
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isByteStack', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isByteHeap', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isByteStruct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        }
    ],
    [
        { tagName: 'div', 'class': 'cell', text: '6' },
        { tagName: 'div', 'class': 'cell', text: 'Sbyte' },
        { tagName: 'div', 'class': 'cell', text: 'sbyte' },
        { tagName: 'div', 'class': 'cell', text: 'int8' },
        { tagName: 'div', 'class': 'cell', text: 'n/a' },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isSByteIntegral', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isSByteBuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isSByteIntegrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isSByteNull', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isSBytePos', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isSByteNeg', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isSByteStack', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isSByteHeap', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isSByteStruct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        }
    ],
    [
        { tagName: 'div', 'class': 'cell', text: '7' },
        { tagName: 'div', 'class': 'cell', text: 'Int16' },
        { tagName: 'div', 'class': 'cell', text: 'short' },
        { tagName: 'div', 'class': 'cell', text: 'int16' },
        { tagName: 'div', 'class': 'cell', text: 'smallint' },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt16Integral', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt16BuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt16Integrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt16Null', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt16Pos', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt16Neg', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt16Stack', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt16Heap', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt16Struct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        }
    ],
    [
        { tagName: 'div', 'class': 'cell', text: '8' },
        { tagName: 'div', 'class': 'cell', text: 'UInt16' },
        { tagName: 'div', 'class': 'cell', text: 'ushort' },
        { tagName: 'div', 'class': 'cell', text: 'unsigned int16' },
        { tagName: 'div', 'class': 'cell', text: 'n/a' },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt16Integral', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt16BuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt16Integrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt16Null', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt16Pos', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt16Neg', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt16Stack', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt16Heap', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt16Struct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        }
    ],
    [
        { tagName: 'div', 'class': 'cell', text: '9' },
        { tagName: 'div', 'class': 'cell', text: 'Int32' },
        { tagName: 'div', 'class': 'cell', text: 'int' },
        { tagName: 'div', 'class': 'cell', text: 'int32' },
        { tagName: 'div', 'class': 'cell', text: 'int' },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt32Integral', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt32BuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt32Integrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt32Null', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt32Pos', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt32Neg', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt32Stack', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt32Heap', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt32Struct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        }
    ],
    [
        { tagName: 'div', 'class': 'cell', text: '10' },
        { tagName: 'div', 'class': 'cell', text: 'UInt32' },
        { tagName: 'div', 'class': 'cell', text: 'uint' },
        { tagName: 'div', 'class': 'cell', text: 'insignedint32' },
        { tagName: 'div', 'class': 'cell', text: 'n/a' },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt32Integral', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt32BuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt32Integrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt32Null', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt32Pos', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt32Neg', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt32Stack', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt32Heap', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt32Struct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        }
    ],
    [
        { tagName: 'div', 'class': 'cell', text: '11' },
        { tagName: 'div', 'class': 'cell', text: 'Int64' },
        { tagName: 'div', 'class': 'cell', text: 'long' },
        { tagName: 'div', 'class': 'cell', text: 'int64' },
        { tagName: 'div', 'class': 'cell', text: 'bigint' },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt16Integral', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt16BuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt16Integrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt16Null', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt16Pos', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt16Neg', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt16Stack', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt16Heap', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isInt16Struct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        }
    ],
    [
        { tagName: 'div', 'class': 'cell', text: '12' },
        { tagName: 'div', 'class': 'cell', text: 'UInt64' },
        { tagName: 'div', 'class': 'cell', text: 'ulong' },
        { tagName: 'div', 'class': 'cell', text: 'unsigned int64' },
        { tagName: 'div', 'class': 'cell', text: 'n/a' },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt64Integral', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt64BuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt64Integrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt64Null', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt64Pos', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt64Neg', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt64Stack', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt64Heap', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isUInt64Struct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        }
    ],
    [
        { tagName: 'div', 'class': 'cell', text: '13' },
        { tagName: 'div', 'class': 'cell', text: 'Decimal' },
        { tagName: 'div', 'class': 'cell', text: 'decimal' },
        { tagName: 'div', 'class': 'cell', text: 'System.Decimal' },
        { tagName: 'div', 'class': 'cell', text: 'decimal, money, smallmoney, numeric' },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isDecIntegral', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isDecBuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isDecIntegrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isDecNull', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isDecPos', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isDecNeg', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isDecStack', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isDecHeap', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isDecStruct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        }
    ],
    [
        { tagName: 'div', 'class': 'cell', text: '14' },
        { tagName: 'div', 'class': 'cell', text: 'Double' },
        { tagName: 'div', 'class': 'cell', text: 'double' },
        { tagName: 'div', 'class': 'cell', text: 'float64' },
        { tagName: 'div', 'class': 'cell', text: 'float' },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isDblIntegral', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isDblBuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isDblIntegrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isDblNull', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isDblPos', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isDblNeg', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isDblStack', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isDblHeap', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isDblStruct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        }
    ],
    [
        { tagName: 'div', 'class': 'cell', text: '15' },
        { tagName: 'div', 'class': 'cell', text: 'Single' },
        { tagName: 'div', 'class': 'cell', text: 'float' },
        { tagName: 'div', 'class': 'cell', text: 'float32' },
        { tagName: 'div', 'class': 'cell', text: 'n/a' },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isSngIntegral', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isSngBuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isSngIntegrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isSngNull', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isSngPos', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isSngNeg', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isSngStack', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isSngHeap', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isSngStruct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        }
    ],
    [
        { tagName: 'div', 'class': 'cell', text: '16' },
        { tagName: 'div', 'class': 'cell', text: 'Boolean' },
        { tagName: 'div', 'class': 'cell', text: 'bool' },
        { tagName: 'div', 'class': 'cell', text: 'bool' },
        { tagName: 'div', 'class': 'cell', text: 'bit' },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isBoolIntegral', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isBoolBuiltIn', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isBoolIntegrated', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isBoolNull', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isBoolPos', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isBoolNeg', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isBoolStack', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isBoolHeap', value: '1', disabled: 'disabled' },
			   	]
			   }
        	]
        },
        {
        	tagName: 'div', 'class': 'cell', child: [
			   {
			   	tagName: 'div', child: [
				   { tagName: 'input', type: 'checkbox', name: 'isBoolStruct', value: '1', 'data-correct': 'true', disabled: 'disabled' },
			   	]
			   }
        	]
        }
    ]
];