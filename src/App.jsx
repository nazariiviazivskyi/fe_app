import { useState } from 'react';
import { Button, Card, CardBody, CardHeader, Divider, Link } from '@nextui-org/react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">React + NextUI + Vite</h1>
        <p className="text-center text-gray-600 mb-8">Modern UI components with beautiful design</p>

        <Card className="mb-6">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-lg font-semibold">Counter Example</p>
              <p className="text-sm text-default-500">NextUI Button Component</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="gap-4">
            <div className="text-center">
              <p className="text-6xl font-bold text-indigo-600 mb-6">{count}</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Button color="primary" onClick={() => setCount((c) => c + 1)} size="lg">
                  Increment
                </Button>
                <Button color="secondary" onClick={() => setCount((c) => c - 1)} size="lg">
                  Decrement
                </Button>
                <Button color="warning" variant="flat" onClick={() => setCount(0)} size="lg">
                  Reset
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardHeader className="flex gap-3">
            <p className="text-lg font-semibold">Getting Started</p>
          </CardHeader>
          <Divider />
          <CardBody className="gap-3">
            <p>
              Edit <code className="bg-gray-200 px-2 py-1 rounded">src/App.jsx</code> and save to
              test HMR
            </p>
            <p>
              Learn more about{' '}
              <Link href="https://nextui.org" target="_blank" rel="noopener noreferrer">
                NextUI
              </Link>{' '}
              and{' '}
              <Link href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
                Vite
              </Link>
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default App;
