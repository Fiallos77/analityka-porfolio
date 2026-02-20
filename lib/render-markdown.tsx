export function renderMarkdownContent(content: string) {
  const lines = content.trim().split("\n")
  const elements: React.ReactNode[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="mb-5 mt-16 text-[1.4rem] font-bold tracking-tight text-primary first:mt-0 md:text-[1.55rem]"
        >
          {line.replace("## ", "")}
        </h2>
      )
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          className="mb-4 mt-10 text-[1.1rem] font-semibold tracking-tight text-foreground md:text-lg"
        >
          {line.replace("### ", "")}
        </h3>
      )
    } else if (line.startsWith("| ")) {
      const tableLines: string[] = []
      let j = i
      while (j < lines.length && lines[j].startsWith("| ")) {
        tableLines.push(lines[j])
        j++
      }
      i = j - 1
      const dataRows = tableLines.filter((l) => !l.match(/^\|\s*[-]+/))
      if (dataRows.length > 0) {
        const headers = dataRows[0]
          .split("|")
          .filter((c) => c.trim())
          .map((c) => c.trim())
        const rows = dataRows.slice(1).map((row) =>
          row
            .split("|")
            .filter((c) => c.trim())
            .map((c) => c.trim())
        )
        elements.push(
          <div
            key={i}
            className="my-10 overflow-x-auto rounded-lg border border-primary/10 bg-secondary/30 p-1 shadow-md shadow-primary/[0.02]"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-primary/15">
                  {headers.map((h, hi) => (
                    <th
                      key={hi}
                      className="px-5 py-3.5 text-left text-[11px] font-semibold tracking-wider text-primary uppercase"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr
                    key={ri}
                    className="border-b border-border/20 last:border-b-0"
                  >
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className={`px-5 py-3 text-sm ${
                          ci === 0
                            ? "font-medium text-foreground/90"
                            : "text-muted-foreground"
                        } ${
                          cell.match(/^\d+(\.\d+)?%?$/)
                            ? "font-mono text-primary/80"
                            : ""
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
    } else if (line.startsWith("- **")) {
      const match = line.match(/^- \*\*(.+?)\*\*\s*[-:]?\s*(.*)/)
      if (match) {
        elements.push(
          <li key={i} className="mb-3.5 flex gap-3 text-muted-foreground">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/50" />
            <span className="leading-[1.8]">
              <span className="font-semibold text-foreground">{match[1]}</span>
              {match[2] ? ` — ${match[2]}` : ""}
            </span>
          </li>
        )
      }
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="mb-3.5 flex gap-3 text-muted-foreground">
          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/50" />
          <span className="leading-[1.8]">{line.replace("- ", "")}</span>
        </li>
      )
    } else if (line.match(/^\d+\.\s/)) {
      const match = line.match(/^\d+\.\s\*\*(.+?)\*\*\s*[-:]?\s*(.*)/)
      const num = line.match(/^(\d+)/)?.[1]
      if (match) {
        elements.push(
          <li key={i} className="mb-3.5 flex gap-3 text-muted-foreground">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-[11px] font-bold text-primary">
              {num}
            </span>
            <span className="leading-[1.8]">
              <span className="font-semibold text-foreground">{match[1]}</span>
              {match[2] ? ` — ${match[2]}` : ""}
            </span>
          </li>
        )
      } else {
        elements.push(
          <li key={i} className="mb-3.5 flex gap-3 text-muted-foreground">
            <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-[11px] font-bold text-primary">
              {num}
            </span>
            <span className="leading-[1.8]">
              {line.replace(/^\d+\.\s/, "")}
            </span>
          </li>
        )
      }
    } else if (line.trim() !== "") {
      elements.push(
        <p
          key={i}
          className="mb-6 text-[0.95rem] leading-[1.85] text-muted-foreground"
        >
          {line}
        </p>
      )
    }
  }
  return elements
}
