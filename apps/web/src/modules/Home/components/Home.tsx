import { Button } from '../../../components/ui';

export function Home() {
  return (
    <div className="flex flex-col gap-3">
      <h3>Welcome Home!</h3>
      <div>
        <Button onClick={() => alert('Hello world')}>Click me</Button>
      </div>
    </div>
  );
}
