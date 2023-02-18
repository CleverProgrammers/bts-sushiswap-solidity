import '@rainbow-me/rainbowkit/styles.css'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Metamask = () => (
  <ConnectButton.Custom>
    {({
      account,
      chain,
      openAccountModal,
      openChainModal,
      openConnectModal,
      authenticationStatus,
      mounted,
    }) => {
      // Note: If your app doesn't use authentication, you
      // can remove all 'authenticationStatus' checks
      const ready = mounted && authenticationStatus !== 'loading'
      const connected =
        ready &&
        account &&
        chain &&
        (!authenticationStatus || authenticationStatus === 'authenticated')

      return (
        <div
          {...(!ready && {
            'aria-hidden': true,
            style: {
              opacity: 0,
              pointerEvents: 'none',
              userSelect: 'none',
            },
          })}
        >
          {(() => {
            if (!connected) {
              return (
                <button
                  onClick={openConnectModal}
                  type='button'
                  style={{
                    padding: '12px 16px',
                    color: '#ffffff',
                    border: 'none',
                    fontSize: '1.2rem',
                    borderRadius: '8px',
                    marginLeft: '20px',
                    backgroundColor: '#3b82f6',
                    fontWeight: 700,
                  }}
                >
                  Connect Wallet
                </button>
              )
            }

            if (chain.unsupported) {
              return (
                <button
                  onClick={openChainModal}
                  type='button'
                  style={{
                    padding: '12px 16px',
                    color: '#ffffff',
                    border: 'none',
                    fontSize: '1.2rem',
                    marginLeft: '4px',
                    borderRadius: '8px',
                    backgroundColor: 'rgb(0, 121, 148)',
                    fontWeight: 700,
                  }}
                >
                  Wrong network
                </button>
              )
            }

            return (
              <div style={{ display: 'flex', gap: 12 }}>
                <button
                  onClick={openChainModal}
                  type='button'
                  style={{
                    padding: '12px 16px',
                    color: '#ffffff',
                    border: 'none',
                    marginLeft: '20px',
                    fontSize: '1.2rem',
                    borderRadius: '8px',
                    backgroundColor: 'rgb(0, 121, 148)',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {chain.hasIcon && (
                    <div
                      style={{
                        background: chain.iconBackground,
                        width: 12,
                        height: 12,
                        borderRadius: 999,
                        overflow: 'hidden',
                        marginRight: 4,
                      }}
                    >
                      {chain.iconUrl && (
                        <img
                          alt={chain.name ?? 'Chain icon'}
                          src={chain.iconUrl}
                          style={{ width: 12, height: 12 }}
                        />
                      )}
                    </div>
                  )}
                  {chain.name}
                </button>

                <button
                  onClick={openAccountModal}
                  type='button'
                  style={{
                    padding: '12px 16px',
                    color: '#ffffff',
                    border: 'none',
                    marginLeft: '4px',
                    fontSize: '1.2rem',
                    borderRadius: '8px',
                    backgroundColor: 'rgb(0, 121, 148)',
                    fontWeight: 700,
                  }}
                >
                  {account.displayName}
                  {account.displayBalance ? ` (${account.displayBalance})` : ''}
                </button>
              </div>
            )
          })()}
        </div>
      )
    }}
  </ConnectButton.Custom>
)

export default Metamask
