export const onRenderCallback = (
  id: string,
  phase: string,
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number,
  interactions: any
) => {
  console.log({
    id,
    phase,
    actualDuration,
    baseDuration,
    interactions,
  });
};

// wrap component to benchmark with <Profiler id="Login" onRender={onRenderCallback}></Profile>
