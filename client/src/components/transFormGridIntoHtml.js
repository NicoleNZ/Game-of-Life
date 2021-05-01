// takes a grid data structure and converts it into html
export const transFormGridIntoHtml = (grid) => {
  return (
    <div>
      <table>
        <tbody>
          {grid.map((rows) => {
            return (
              <tr>
                {rows.map((cell) => (
                  <div
                    className={`${cell ? "liveCell" : "deadCell"}`}
                    style={{ display: "inline-flex" }}
                  />
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
