interface LogoProp {
  url: string
  src: string
}

export function Logo({ url, src }: LogoProp) {
  return (
    <a href={url} className="block h-full">
      <div className="h-full flex items-center justify-center">
        <img
          src={src}
          className="max-h-20 max-w-[80%] align-middle"
          alt=""
        />
      </div>
    </a>
  )
}
