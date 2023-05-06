import Characters from "./Components/Characters";
import { QueryClient, QueryClientProvider } from "react-query";
import { BladeProvider } from "@razorpay/blade/components";
import { paymentTheme } from "@razorpay/blade/tokens";
import { Wrapper } from "./styles";
import Navbar from "./Components/Navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <BladeProvider themeTokens={paymentTheme} colorScheme="light">
      <QueryClientProvider client={queryClient}>
        <Wrapper>
          <Navbar />
          <Characters />
        </Wrapper>
      </QueryClientProvider>
    </BladeProvider>
  );
}

export default App;
