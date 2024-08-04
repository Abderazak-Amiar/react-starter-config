import type { Config } from 'jest';

export default async (): Promise<Config> => {
  return {
    verbose: true,
    setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  };
};
