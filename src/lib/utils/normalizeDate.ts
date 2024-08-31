import { format as formatDate, Locale } from "date-fns";

const DEFAULT_DATA_FORMAT = "MMMM, d";

type NormalizeDateProps = {
  value: string | Date;
  format?: string;
  locale?: Locale;
};

export const normalizeDate = ({
  value,
  format = DEFAULT_DATA_FORMAT,
}: NormalizeDateProps): string => {
  return formatDate(value, format);
};
