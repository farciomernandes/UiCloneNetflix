import React from 'react';
import { render } from '@testing-library/react';
import SignIn from '../../pages/SignUp';

describe('SignIn Page', ()=>{
  it('should be able ti sign in', ()=>{
    const { debug } = render(<SignIn />);

    debug();
  });
});
