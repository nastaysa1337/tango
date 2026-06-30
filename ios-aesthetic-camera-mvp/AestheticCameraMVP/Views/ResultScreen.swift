import SwiftUI

struct ResultPreviewView: View {
    let image: UIImage
    let template: CompositionTemplate
    let gridOpacity: Double
    let onRetake: () -> Void
    var body: some View {
        VStack {
            Text("Preview")
            Button("Retake", action: onRetake)
        }
    }
}
