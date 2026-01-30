import React from 'react';
import { useDeviceData } from 'react-device-detect';
import { submitRenderError } from '../../../client/feedback-client';
import Card from '../Card';
import Separator from '../Separator';

export default function ErrorBoundary({ children }) {
  const deviceInfo = useDeviceData();

  return (
    <ErrorBoundary FallbackComponent={ErrorPage} onError={(error, info) => submitRenderError(error, info, deviceInfo)}>
      {children}
    </ErrorBoundary>
  );
}

export function ErrorPage({ error }) {
  return (
    <div className='bg-secondary w-full h-full min-h-screen'>
      <div className='container mx-auto max-w-[600px] pt-4'>
        <Card className='h-full'>
          <Card.Body>
            <p className='text-accent text-center text-xl tracking-widest small-caps'>Something went wrong :(</p>
            <div className='text-center text-primary'>
              <p>We've been notified of this error and will do our best to resolve it for you soon!</p>
              <p>
                You can also come by our{' '}
                <a className='text-accent underline' href='https://discord.gg/GQ5kVyU' target='_blank' rel='noreferrer'>
                  Discord
                </a>{' '}
                for more immediate help.
              </p>
            </div>
            <Separator className='mt-4 mb-4' />
            <p className='text-accent text-center text-lg tracking-widest small-caps'>Error details:</p>
            <div className='text-primary text-xs overflow-auto max-h-[200px]'>
              <p>{error.message}</p>
              <p>{error.stack}</p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
