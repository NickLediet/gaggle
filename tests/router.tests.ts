import Router from '../src/lib/router';
import {screen} from '@testing-library/jest-dom';

describe('Router', () => {
    describe('defaults', () => {
        it('should use the documents body element as the context', () => {
            const router = new Router();
            const context = router.getContext();

            document.body.dataset.testid = 'body';
            const body = screen
        })
    })

})
