import { it, vi} from 'vitest';

import { sendDataRequest } from './http';

vi.stubGlobal('fetch', () =>{
    
})

it('should return any available response data', () =>{
    sendDataRequest()
})