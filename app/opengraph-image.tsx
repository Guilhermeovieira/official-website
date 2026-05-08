import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#243e47',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px',
        }}
      >
        <div style={{ color: '#ccd7d8', fontSize: 72, fontWeight: 900 }}>
          LCNV
        </div>
        <div style={{ color: '#8bbfc7', fontSize: 32, fontWeight: 400 }}>
          Contabilidade
        </div>
        <div
          style={{
            color: '#ffffff',
            fontSize: 28,
            opacity: 0.6,
            marginTop: 16,
          }}
        >
          Contabilidade estratégica para o seu negócio
        </div>
      </div>
    ),
    size
  )
}