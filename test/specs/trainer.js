var fs = require('fs');
var path = require('path');
var test = require('tape');
var crfsuite = require('../..');

var trainer = new crfsuite.Trainer();


test('crfsuite trainer', function (t) {
    t.plan(2)
    
    let model_filename = path.resolve('./model.crfsuite')

    t.notOk(fs.existsSync(model_filename), 'model file must not exist before training')
    
    let xseq = [['walk'], ['walk', 'shop'], ['clean', 'shop']]
    let yseq = ['sunny', 'sunny', 'rainy']
    // submit training data to the trainer
    trainer.append(xseq, yseq)
    trainer.train(model_filename)

    t.ok(fs.existsSync(model_filename), 'model file must exist after training')
})