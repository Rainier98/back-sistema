const babelParser = require('@babel/parser');

exports.analyzeCode = (req, res) => {
  const { code } = req.body;

  console.log('Code received for analysis:', code);

  try {
    const syntaxTree = babelParser.parse(code, { sourceType: 'module', plugins: ['jsx', 'flow'] });

    const lines = code.split('\n').length;
    const words = code.split(/\s+/).filter(word => word).length;
    const characters = code.length;

    const functions = syntaxTree.program.body.filter(node => node.type === 'FunctionDeclaration').length;
    const classes = syntaxTree.program.body.filter(node => node.type === 'ClassDeclaration').length;

    const analysisResult = {
      lines,
      words,
      characters,
      functions,
      classes,
      syntaxTree
    };

    res.json(analysisResult);
  } catch (error) {
    console.error('Error analyzing code:', error);
    res.status(400).json({ error: error.message });
  }
};

