import Foundation
import ExpoModulesCore

internal class InitializationRequiredException: Exception {
  override var reason: String {
    "Initialization required"
  }
}
