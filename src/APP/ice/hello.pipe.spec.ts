import { HelloPipe } from './hello.pipe';

describe('HelloPipe', () => {
  it('create an instance', () => {
    const pipe = new HelloPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform sarvan into => Hello sarvan', () => {
    const pipe = new HelloPipe();
    expect(pipe.transform('sarvan')).toEqual('Hello sarvan');
  });

  it('should transform user into => Hello user', () => {
    const pipe = new HelloPipe();
    expect(pipe.transform('user')).toEqual('Hello user');
  });
});
