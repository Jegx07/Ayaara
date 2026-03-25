import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface AppErrorBoundaryState {
  hasError: boolean;
  errorMessage: string;
}

export default class AppErrorBoundary extends React.Component<React.PropsWithChildren, AppErrorBoundaryState> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: '',
    };
  }

  static getDerivedStateFromError(error: Error): AppErrorBoundaryState {
    return {
      hasError: true,
      errorMessage: error?.message ?? 'Unexpected render error',
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('App render error:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f6f8f6] p-6">
        <div className="w-full max-w-xl rounded-2xl border border-[#dde3df] bg-[#fbfcfb] p-6 text-center">
          <h1 className="font-display text-3xl font-semibold text-[#18271d]">Something went wrong</h1>
          <p className="mt-2 text-sm text-[#76877e]">
            The page hit a runtime error. Use the actions below to recover.
          </p>
          <p className="mt-3 rounded-lg bg-[#f0f4f1] p-3 text-left text-xs text-[#425248]">
            {this.state.errorMessage}
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <Button onClick={this.handleReload} className="bg-[#1d7d54] hover:bg-[#145d3f]">
              Reload Page
            </Button>
            <Link to="/dashboard">
              <Button variant="outline" className="border-[#d7dfda] text-[#234033] hover:bg-[#f0f4f1]">
                Open Dashboard
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="border-[#d7dfda] text-[#234033] hover:bg-[#f0f4f1]">
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
