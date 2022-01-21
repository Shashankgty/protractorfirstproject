describe('demo calculator test', function () {
 
    it('Verify addition is working as expected or not', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('15');
        element(by.model('second')).sendKeys('45');
        element(by.css('[ng-click="doAddition()"]')).click();
        let Result = element(by.cssContainingText('ng-binding', '60'));
        expect(Result.getText().ToEqual('60'));
    });
});