interface LogoProp {
  url: string
  src: string
}

export function Logo({ url, src }: LogoProp) {
  return (
    <a href={url}>
      <div
        style={{
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <img
          src={src}
          style={{
            maxHeight: '100%',
            maxWidth: '80%',
            verticalAlign: 'middle',
          }}
          alt=""
        />
      </div>
    </a>
  )
}
