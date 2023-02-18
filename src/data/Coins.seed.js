export const Coins = [
  {
    name: 'BitCoin',
    value: 'BTC',
    imageUrl:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAANlBMVEVHcEz/miT5lRv5lBr4lBr3kxr4kxr4kxr3kxr9lxz937z6w4D4pkL++PH////+7Nf6tGH80Z1gLiRMAAAACnRSTlMADz9ehavC4f8dTtIi3wAAA9xJREFUeAG804mBBFEEBFA0VSX/hDeAnfM38wJwsyMeVxZAUiIJVF7h9hMeCeohIreriITeQMZeduozGzV0Ul9gtk2K0tcq5tJDRxD76fdL6NIt1XbLpbuYdi6oAQw7lBqSdqKhMej98U+vITXoYA2lcWWfc2gBfP/8ZipoagnbPuDUGvr8/se3AK3C/P/NfmNq2R+t5oH0OAhD4QQ3Amrc/7BbwraM/dtPMvumepo16EMNXUSklJ0qpVJ2Ko28gCwiXOqoy+gGkKSLxoDoB6DKW/r+MNgdMwYAoNINaO+P1t1BYQwCEZC7Afb+0P7REAxwBzgQkC4LOuGVu+IISFeG9IqFwKbN6ASBbg2iJURgdzM3IxQBnEMsBMhvaTOKItC1Rg7A5F+xBhHoSoEDaHKk4kWgaw3EIJUD9ejjQqAr+asA+VrsQaBr8ceAWlgulB16RYIgVZUzNcqw5mAWMDmVVrgwiKbBKufiimIYTUNyJTWXD7axBuDXcQsWIvRJ3fHdUNwHc77DgO3vBm7BHCtFy9HFp8b7EA2F42ewEOvSk1QBXIbnfQQ+IgR7nZAGIHBigQEQ3EXgNEY1CIJtEAJd7MNwAxiEEdiXDIpQmEYh0FXcFE4jEIifwPSYhyJA3lA0P5ahCDRvJFoe60gETD5ESDBe7yAgn61a86ej1R0G+KAqb9Ws7rNyhUqCLYYAIM3/w4AqqJgwA+IIAP8H9IggAKhkUI8tjsCXxnAxvDfY7kQB26GP4Y8bACQCawcFKeEGrAMSwb4gZXxQso5JBDUQhboBy6BEQE0+ZeCQYI4jcJ6JFGwPp2G1QLaAE6ZHiiOwU4l0h88wApeZijLUGm1xBHZiL4Yb1JiQNtv5WK/neIZ1pzM2n9RSrrse9lHYW7MUy4B2Xa0Y1pw+YzUIMMolhEEAAkXrLfo8KkbnxXNkLMha7fz/UtARTQoXYeWfotxaoCpIwMIAyYVYS1ENjY03aFDZx3B+NcgDiA+CRhDmAXxU6jSiAR7wj+upjGyL5sCjJWoAk+/xcnFWJK3p+f/N+XaZ/I/FVL8+DSX3u93qqkj4NEJoDbxcpsC+QP39v1b434lF7O129SBQ99YQmRlRfI8j+fcFGM760BLFEkWABu0zvaII5JBe+AoxhMCQdaptPAIggc6kOACBdGORiWq9jcA8YpXrBgIrsMwGlwcW3ywFMACMoGEAfG/eDq4AgAAYigGw/8Km6IsV2uuPDxp90umj1j+y3nJB2EzSbvDCqj7v98DBEw+PXDzz8dCJUi8wQvfcz4NHTz49epXsF8DnHcPXNU+/NX4H/P8BC2PKINdSx6oAAAAASUVORK5CYII=',
  },
  {
    name: 'Ethereum',
    value: 'ETH',
    imageUrl:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAHlBMVEVHcExifutkgOxifutifutifurAy/b///+Bl+6hsvK9JwfqAAAABXRSTlMAuT/fhRZUC3MAAAOZSURBVHjaxZsBsuQgCEQDKoH7X3jr79QWOz9mBmhn7AvwQqNR0aMm5k5ErbUxWmtE1JmPL4k7tTFVo86fDz7e6IMQ3NuIqfOm6K62mIFppEW8ODyEgIffh0ADEoHh+4DVkey3sUCNwc/H1UH3cRGaflwMpH+LDTSWiz4V33Q9Qcr+U8Lj8SPlJ6cYQAB/v56nyAAIwPhDfgAMIADr384fAFFgLGDj73wACDAaoflH/gHYohmJR0p6PgBSJgxeN/+fDmAjrmUFYA6QSgHBBeAJcADBf0w8cpJnAIN/zi1rgANkTWjLDHAA3ISsAVcAhUYCFaYABwBGAlCBDgDUITIFOACeAi5UoAO4yimgggEOUDKB4J+QA9RMYDQBDoCnoFCBLsFT0AEDHCBdh72+Dr0HKK1QGUiAAxRM4JID5zsASXsAVOAUQJMecMkAl9RTwHkHJAJgOQ8IMGAOILkdO1CBDlA0IVsCEgWwRBH0TAVGASRRBIQmwEop8CJoaAWqWrkOW6oGb7KvOkWIViEXDXDz9a+sZgLHAfQS3QGmDBoD6CUDngK5LJ2CfhCwEHeAKYKGhgEBOyEHmCOsBJAXE/9vmcVNoKNlDJCZdCKLmtCCAB4+AuAIqwDEw0cAHMHeA8QqUF5Ib2X2PgUhAJEkgOttCmIWWBlgVRFqDWDEihBEKIV3ABqumg9AfJ8JQ1JLAAwXDqAvfSiFd4Ae8l/dhwhAvKfXD47NhHZfCi/Ci6ErIidwBH0N8P+4scjGILwccB/0HuC5YiOL0sz/WKY+zLMf/RsfuRWJTYbkNPvR9Uhia3Y+dPXhJrxIcGvGyWX5ZUhes/9Q+IQi3yJ5jjUPLxpuG1B6a/Q8JGfZF7H4AUWvNCnUQ+r0Z5E4ouERJ5ghzMdm5qCw1fan9mLBYKmj0l7doetNeLHcQSWXD2lE5ysFTR6Xt/o5nbj5Ls22LztyUGYqv2T57uWew+rDRTuO6+lw8cqGRalvRwBBKb4nAD+yB47qqymwewCtdq/5251Thtr3eO+YwAsMOgcYYcFXOAy7wNAPF9y+BFqWSB3qFQC+zdVrBLABLvrORSZadZnNAZACwMug1LJ24WMRLAC8DMACwKdkbArGrxWfyYY9QIDcK/b46wmg+DiBApfbN1zv3/rAYfcTj72PXBojb8xwtd0PnXY/9dr92A0TDUi0+8Hj5iefux+9LhX87BcX97Y8+v6n3/sfv29//v8HwRsN0ET2sBAAAAAASUVORK5CYII=',
  },
  {
    name: 'Solana',
    value: 'SOL',
    imageUrl: 'https://static.ftx.com/nfts/330616751556111167.png',
  },
  {
    name: 'Solana',
    value: 'SOL',
    imageUrl:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAJFBMVEVHcEwygzIzhDMygzIygzIygzKtza3///9Zmlnu9e6Vv5V3rXeM+S72AAAABXRSTlMAu0LhhaGxI4YAAAQASURBVHja1ZvpbuMwDISjg7KO93/fdZFuZm01sYaUKyx/FAVagOP5aOqw9NCF99E5F0IQ2X/sv0bvH78Ue+ogP0bYZdyfXC7iRhE+BhmLWzQMZQeNOPnhndDh/LL0kDAx/ToJTkzhrKUn5ogW94NMiOCNj7/MBCfTwq2yH+FX2Q8MK+znMfD5W75DAYG/VOJ9vCF/KqnpFdjzt62klLUK7PmlfAmoolRgr/+0bVtKDARxM/PnPX9Je8g8BVEoAE8HUp3WkbwQUbe/DqQ8qysHDsDTARaCGAsAAOBAqlPKIHIA4AALIVoKAADgAA3BWwoALQAOkM1AghlA2+DALAgUgLKdHLC/CY4HAAd4CM5SgQAAB/h2ZGsBnQPWZuBpAHBACcFbBsHOAUDQWeB5AHBAC8GrZyHvHDDMTXQA4ABC1wuiAgAcUEOImlGgbh8d0M2RvQYAHNBD8DyBdC2g8gyCAYBI00MILIF8qsBnrlxVEMAgaltAfgmrymYQuS7UDukPaTIPAb1INQjWTp2qDqkSSGf4e9SCx20KCJ4ogdanb8/Vce5LIRNF4DgAgJ+xNuwkVKIIAgUA6dO/jaidObTxTkD14Nq1pA57o5rBcA2WE/yuFYODVAKCHxRQkR4N8eBAVwp5UEAcAtDBPzkADpAw+Bq4IQBoPOnzfAClMAbBDQloqL1yNRyjFFqeJqCvPUTqolKTc2IyAPi9A+q5cRgUAPi9A6QEXgDgXzuAyKMC5CIAn3CAKIXHoAHpGaVcrQv2aHvkPGjBEAKMcxWpyq7mW8B30j0rYn4R5jesf4yZbwGiDQsQQsBQJ/wg4UP6iZ0QI1G9EoD0E8cCSRiLzxLepk9tTEAcnY9AwnsBr39pozOSODghaYe1QHsj4PD3PHVGJOm4GgKHY3o41IYXBtznga4UevjUvBzT8sF1SVeNSH+wJo9Pyx07HB9LoYMPAIMLk8htDpyr8ZD+Fcz63Cu2Rwoa0wE+vT73yuU5SgHp1cvzh9NtkaX34xS5WRpFAaFvTIhMbtF4/TZpg/uISm8UBv0+Zcq5Wrbp7BuVm2VREBVfC66XZkIR4A9tzN2sBgMthKIHIFH3weIEQQ9AlJ9sWu+A/auVFzUENQDxN3y2EyKc6fAIQgtA/PpPt3oLcu+A/RCF00EoOgAwACE6CDoAYj3Ckacd4Vh/iAXheQhwoCor0H6OxgbAfpClGA+w2I/y8ADChON8gDDnOB8i0hBoAHH9kc4ZCtCR+VkIoWDBsV6yI+YvAbLyaHUtDICw+HC7u+N4f85E/sUXHFZf8Vh7ySX41dd81l90Wn/Va5kJcfF1v9UXHhdf+Vx86XXttd+VF59D9Guvfv9fl9+XX///A/WnDWpGsn6XAAAAAElFTkSuQmCC',
  },
  {
    name: 'Litecoin',
    value: 'LTC',
    imageUrl:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjE0QzRCOTk4NEE4NjExRUNBRDY5Q0JGRDMzMkQzMUI1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjE0QzRCOTk5NEE4NjExRUNBRDY5Q0JGRDMzMkQzMUI1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTRDNEI5OTY0QTg2MTFFQ0FENjlDQkZEMzMyRDMxQjUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTRDNEI5OTc0QTg2MTFFQ0FENjlDQkZEMzMyRDMxQjUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Cde1oAAAMpklEQVR42uxdCWxU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',
  },
  {
    name: 'Dogecoin',
    value: 'DOGE',
    imageUrl: 'https://static.ftx.com/nfts/520333723837897367.png',
  },

  {
    name: 'PolkaDot',
    value: 'DOT',
    imageUrl: 'https://static.ftx.com/nfts/482642201115842103.png',
  },
]
