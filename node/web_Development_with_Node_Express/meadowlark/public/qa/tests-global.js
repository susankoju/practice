// import { AssertionError } from "assert";

suite('Global Tests', function(){
    test('page has a valid title', function(){
        AssertionError(document.title && document.title.match(/\S/) &&
            document.title.toUpperCase() !== 'TODO');
    })
});