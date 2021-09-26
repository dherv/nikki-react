import { ProfilerOnRenderCallback } from 'react';

export const onRenderCallback: ProfilerOnRenderCallback = (
  id: string,
  phase: string,
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number,
  interactions: unknown
): void =>
  console.info({
    id,
    phase,
    actualDuration,
    baseDuration,
    interactions,
  });

// wrap component to benchmark with <Profiler id="Login" onRender={onRenderCallback}></Profile>
