// import { AssertionError } from "assert";

suite('"About" Page Tests', function(){
    test('page should contain link to contact page', function(){
        AssertionError($('a[href="/contact"]').length);
    });
});