export const Footer = () => {
  return (
    <footer className="flex gap-x-1 min-h-40 w-full items-center justify-center border-t">
      <span className="text-sm text-neutral-300">
        &copy; {new Date().getFullYear()} Lucas Ellwanger
      </span>
    </footer>
  );
};
